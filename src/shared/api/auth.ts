import { customFetch } from './client'

//TODO: удалить перед релизом
import { USE_MOCKS } from '../config/config'
import { Role } from '../types/role'

const API_URL = process.env.REACT_APP_API_URL || ''

export type AuthResponse = {
  access_token: string
  refresh_token: string
  token_type?: string
  expires_in: number
  scope: string
}

const createMockToken = (role: string) => {
  return `mock-token-${role}-${Date.now()}`
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) {
    await new Promise((res) => setTimeout(res, 500))

    if (password !== '12345678') {
      throw new Error('Неверный пароль')
    }

    let scope = 'student'

    if (email.includes('admin')) scope = 'admin'
    else if (email.includes('curator')) scope = 'curator'

    return {
      access_token: createMockToken(scope),
      refresh_token: `mock-refresh-${scope}`,
      token_type: 'bearer',
      expires_in: 3600,
      scope,
    }
  }

  const formData = new URLSearchParams() //использую URLSearchParams так как мы реализуем OAuth2 а он принимает только application/x-www-form-urlencoded
  formData.append('username', email)
  formData.append('password', password)
  formData.append('grant_type', 'password') //для тиммейтов: это из OAuth2, что говорит бэку "я логинюсь через пароль"

  const response = await customFetch(`${API_URL}/api/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: 'include',
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData?.message || 'Failed to login')
  }

  return (await response.json()) as AuthResponse
}
// TODO: после backend update убрать аргумент token.
// refreshToken() без параметров
export const refreshToken = async (token: string): Promise<AuthResponse> => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) {
    await new Promise((res) => setTimeout(res, 300))

    const role = token.includes('admin') ? 'admin' : token.includes('curator') ? 'curator' : 'student'

    return {
      access_token: createMockToken(role),
      refresh_token: token,
      token_type: 'bearer',
      expires_in: 3600,
      scope: role,
    }
  }

  const formData = new URLSearchParams()

  formData.append('grant_type', 'refresh_token')
  // TODO: удалить после перехода backend на cookie refresh token.
  // Token должен приходить автоматически через HttpOnly cookie
  formData.append('refresh_token', token)

  const response = await customFetch(`${API_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: 'include',
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Refresh failed')
  }

  return (await response.json()) as AuthResponse
}

export const register = async (data: {
  email: string
  password: string
  first_name: string
  last_name: string
  role: Role
}) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) {
    await new Promise((res) => setTimeout(res, 500))
    return { success: true }
  }

  const response = await customFetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to register')
  }

  return response.json()
}

import { Role } from '../types/role'

const API_URL = process.env.REACT_APP_API_URL || ''

const USE_MOCK_AUTH = true

const createMockToken = (role: string) => {
  return `mock-token-${role}-${Date.now()}`
}

export const login = async (email: string, password: string) => {
  if (USE_MOCK_AUTH) {
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

  const response = await fetch(`${API_URL}/api/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to login')
  }

  return response.json()
}

export const refreshToken = async (token: string) => {
  if (USE_MOCK_AUTH) {
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
  formData.append('refresh_token', token)

  const response = await fetch(`${API_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Refresh failed')
  }

  return response.json()
}

export const register = async (data: {
  email: string
  password: string
  first_name: string
  last_name: string
  role: Role
}) => {
  if (USE_MOCK_AUTH) {
    await new Promise((res) => setTimeout(res, 500))
    return { success: true }
  }

  const response = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to register')
  }

  return response.json()
}

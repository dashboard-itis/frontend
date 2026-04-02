import { Role } from '../types/role'

const API_URL = process.env.REACT_APP_API_URL || ''
export const login = async (email: string, password: string) => {
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

export const register = async (data: {
  email: string
  password: string
  first_name: string
  last_name: string
  role: Role
}) => {
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

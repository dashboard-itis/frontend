import { Api } from './api'

const BASE_URL = process.env.REACT_APP_API_URL || ''

export const customFetch: typeof fetch = async (input, init = {}) => {
  const headers = new Headers(init.headers || {})
  const token = localStorage.getItem('access_token')

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(input, {
    ...init,
    headers,
    credentials: 'include',
  })

  if (response.status === 401) {
    const token = localStorage.getItem('access_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user_roles')
    if (token) {
      window.location.href = '/login'
    }
    const error = await response.json().catch(() => null)
    throw new Error(error?.message || 'Unauthorized')
  }

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    console.error(`API Error ${response.status}:`, error)
    throw new Error(error?.detail || `HTTP ${response.status}`)
  }

  return response
}

export const api = new Api({
  baseUrl: BASE_URL,
  customFetch,
})

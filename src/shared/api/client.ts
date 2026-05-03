import { Api } from './api'

import { USE_MOCKS } from '../config/config'

const BASE_URL = process.env.REACT_APP_API_URL || ''

const customFetch: typeof fetch = async (input, init = {}) => {
  const headers = new Headers(init.headers || {})
  // TODO: после полного перехода на backend убрать USE_MOCKS (только блок If).
  // Authorization Bearer header должен добавляться всегда, не только для моков.
  if (USE_MOCKS) {
    const token = localStorage.getItem('access_token')

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  }

  const response = await fetch(input, {
    ...init,
    headers,
    credentials: 'include',
  })

  if (response.status === 401) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user_roles')
    window.location.href = '/login'
    throw new Error('Unauthorized')
  }

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    console.error(`API Error ${response.status}:`, error)
  }

  return response
}

export const api = new Api({
  baseUrl: BASE_URL,
  customFetch,
})

import { api } from './client'

export type AuthResponse = {
  access_token: string
  refresh_token: string
  token_type?: string
  expires_in: number
  scope: string
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.api.loginApiV1AuthLoginPost({
    username: email,
    password,
    grant_type: 'password',
  })

  return response.data as AuthResponse
}

export const refreshToken = async (): Promise<AuthResponse> => {
  const response = await api.api.refreshApiV1AuthRefreshPost()

  return response.data as AuthResponse
}

export const register = async (data: { email: string; password: string; first_name: string; last_name: string }) => {
  const response = await api.api.registerApiV1AuthRegisterPost(data)

  return response.data
}

export const confirmAccount = async (user_id: number, code: string) => {
  const response = await api.api.confirmAccountLinkApiV1AuthConfirmAccountGet({
    user_id: user_id,
    code,
  })

  return response.data
}

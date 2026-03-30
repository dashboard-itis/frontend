import { createContext } from 'react'

type AuthContextValue = {
  accessToken: string | null
  roles: string[]
  isAuth: boolean

  login: (email: string, password: string) => Promise<any>
  register: (data: {
    email: string
    password: string
    first_name: string
    last_name: string
    role?: 'STUDENT' | 'CURATOR' | 'ADMIN'
  }) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

import { createContext } from 'react'

import { Role } from '../types/role'

type AuthContextValue = {
  accessToken: string | null
  roles: Role[]
  isAuth: boolean
  isLoading: boolean

  login: (email: string, password: string) => Promise<Role[]>
  register: (data: {
    email: string
    password: string
    first_name: string
    last_name: string
    role?: Role
  }) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

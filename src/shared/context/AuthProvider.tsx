// TODO: это авторизация с привязанным бэком, пока закомментировано, потому что работаем на моках
import React, { useState, useEffect } from 'react'

import { AuthContext } from './AuthContext'

import { AuthResponse, login as apiLogin, register as apiRegister, refreshToken as apiRefresh } from '../api/auth'

import { Role } from '../types/role'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('access_token')
  })

  const [roles, setRoles] = useState<Role[]>(() => {
    const savedRoles = localStorage.getItem('user_roles')
    if (!savedRoles) return []
    try {
      return JSON.parse(savedRoles)
    } catch {
      return []
    }
  })

  const saveAuth = (data: AuthResponse) => {
    setAccessToken(data.access_token)
    localStorage.setItem('access_token', data.access_token)

    const rolesFromScope = data.scope.split(' ').map((r: string) => r.toUpperCase() as Role)

    setRoles(rolesFromScope)
    localStorage.setItem('user_roles', JSON.stringify(rolesFromScope))
  }

  const login = async (email: string, password: string): Promise<Role[]> => {
    const data = await apiLogin(email, password)
    saveAuth(data)

    return data.scope.split(' ').map((r: string) => r.toUpperCase() as Role)
  }

  const register = async (data: { email: string; password: string; first_name: string; last_name: string }) => {
    await apiRegister(data)
  }

  const logout = () => {
    setAccessToken(null)
    setRoles([])
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_roles')
  }

  const restoreSession = async () => {
    const access = localStorage.getItem('access_token')
    if (access) {
      try {
        const data = await apiRefresh()
        saveAuth(data)
        return
      } catch {
        logout()
        return
      }
    }
  }

  useEffect(() => {
    restoreSession()
  }, [])

  return (
    <AuthContext.Provider value={{ accessToken, roles, isAuth: !!accessToken, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

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

    // TODO: refresh_token временно храним в localStorage.
    // После готовности backend перенести в HttpOnly cookie.
    if (data.refresh_token) {
      localStorage.setItem('refresh_token', data.refresh_token)
    }

    const rolesFromScope = data.scope.split(' ').map((r: string) => r.toUpperCase() as Role)

    setRoles(rolesFromScope)
    localStorage.setItem('user_roles', JSON.stringify(rolesFromScope))
  }

  const login = async (email: string, password: string): Promise<void> => {
    const data = await apiLogin(email, password)
    saveAuth(data)
  }

  const register = async (data: {
    email: string
    password: string
    first_name: string
    last_name: string
    role?: Role
  }) => {
    await apiRegister({ ...data, role: data.role || 'STUDENT' }) // если роли нет то ты студент по умолчанию (ого как стих почти)
  }

  const logout = () => {
    setAccessToken(null)
    setRoles([])
    localStorage.removeItem('access_token')
    // TODO: после перехода на cookie удалить logout endpoint / очистку cookie на backend.
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user_roles')
  }

  const restoreSession = async () => {
    const access = localStorage.getItem('access_token')
    // TODO: после перехода на HttpOnly cookie refresh token не читать из JS.
    // Просто вызывать /auth/refresh с credentials: include.
    const refresh = localStorage.getItem('refresh_token')

    if (refresh) {
      try {
        const data = await apiRefresh(refresh)
        saveAuth(data)
        return
      } catch {
        logout()
        return
      }
    }
    if (access) {
      setAccessToken(access)
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

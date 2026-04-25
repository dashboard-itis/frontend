import React, { useState, useEffect } from 'react'

import { AuthContext } from './AuthContext'

import { login as apiLogin, register as apiRegister, refreshToken as apiRefresh } from '../api/auth'

import { Role } from '../types/role'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('access_token')
  })

  const [roles, setRoles] = useState<string[]>(() => {
    const savedRoles = localStorage.getItem('user_roles')
    if (!savedRoles) return []
    try {
      return JSON.parse(savedRoles)
    } catch {
      return []
    }
  })

  const saveAuth = (data: any) => {
    setAccessToken(data.access_token)
    localStorage.setItem('access_token', data.access_token)

    if (data.refresh_token) {
      localStorage.setItem('refresh_token', data.refresh_token)
    }

    const rolesFromScope = data.scope.split(' ').map((r: string) => r.toUpperCase())

    setRoles(rolesFromScope)
    localStorage.setItem('user_roles', JSON.stringify(rolesFromScope))
  }

  const login = async (email: string, password: string) => {
    const data = await apiLogin(email, password)
    saveAuth(data)
    return data
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
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user_roles')
  }

  const restoreSession = async () => {
    const access = localStorage.getItem('access_token')
    const refresh = localStorage.getItem('refresh_token')

    if (access) {
      setAccessToken(access)
      return
    }

    if (refresh) {
      try {
        const data = await apiRefresh(refresh)
        saveAuth(data)
      } catch {
        logout()
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

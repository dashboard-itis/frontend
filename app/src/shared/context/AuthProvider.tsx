import React, { useState, useEffect } from 'react'

import { AuthContext } from './AuthContext'

import {
  AuthResponse,
  getCurrentUser,
  login as apiLogin,
  register as apiRegister,
  refreshToken as apiRefresh,
} from '../api/auth'

import { Role } from '../types/role'

const appRoles: Role[] = ['ADMIN', 'CURATOR', 'STUDENT']

const normalizeRoles = (roles: string[] = []): Role[] => {
  return roles.map((role) => role.toUpperCase()).filter((role): role is Role => appRoles.includes(role as Role))
}

const getRolesFromScope = (scope: string): Role[] => {
  return normalizeRoles(scope.split(' '))
}

const getRolesFromCurrentUser = async (fallbackScope: string): Promise<Role[]> => {
  const currentUser = await getCurrentUser()

  const rolesFromUser = normalizeRoles(currentUser.roles)

  return rolesFromUser.length > 0 ? rolesFromUser : getRolesFromScope(fallbackScope)
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('access_token')
  })
  const [isLoading, setIsLoading] = useState(() => Boolean(localStorage.getItem('access_token')))

  const [roles, setRoles] = useState<Role[]>(() => {
    const savedRoles = localStorage.getItem('user_roles')
    if (!savedRoles) return []
    try {
      return JSON.parse(savedRoles)
    } catch {
      return []
    }
  })

  const saveAuth = (data: AuthResponse, roles: Role[]) => {
    setAccessToken(data.access_token)
    localStorage.setItem('access_token', data.access_token)

    setRoles(roles)
    localStorage.setItem('user_roles', JSON.stringify(roles))
  }

  const login = async (email: string, password: string): Promise<Role[]> => {
    const data = await apiLogin(email, password)
    localStorage.setItem('access_token', data.access_token)
    const rolesFromUser = await getRolesFromCurrentUser(data.scope)
    saveAuth(data, rolesFromUser)

    return rolesFromUser
  }

  const register = async (data: { email: string; password: string; first_name: string; last_name: string }) => {
    await apiRegister(data)
  }

  const logout = () => {
    setAccessToken(null)
    setRoles([])
    setIsLoading(false)
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_roles')
  }

  const restoreSession = async () => {
    const access = localStorage.getItem('access_token')
    if (!access) {
      setIsLoading(false)
      return
    }

    try {
      const data = await apiRefresh()
      localStorage.setItem('access_token', data.access_token)
      const rolesFromUser = await getRolesFromCurrentUser(data.scope)
      saveAuth(data, rolesFromUser)
    } catch {
      logout()
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    restoreSession()
  }, [])

  return (
    <AuthContext.Provider value={{ accessToken, roles, isAuth: !!accessToken, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

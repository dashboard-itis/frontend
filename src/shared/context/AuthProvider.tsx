import React, { useState, useEffect } from 'react'

import { AuthContext } from './AuthContext'

import { login as apiLogin, register as apiRegister } from '../api/auth'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('access_token')
  })

  const [roles, setRoles] = useState<string[]>(() => {
    const savedRoles = localStorage.getItem('user_roles')
    return savedRoles ? JSON.parse(savedRoles) : []
  })

  useEffect(() => {
    const savedToken = localStorage.getItem('access_token')
    const savedRoles = localStorage.getItem('user_roles')
    if (savedToken) {
      setAccessToken(savedToken)
      if (savedRoles) {
        setRoles(JSON.parse(savedRoles))
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    const data = await apiLogin(email, password)

    setAccessToken(data.access_token)
    localStorage.setItem('access_token', data.access_token)

    const rolesFromScope = data.scope.split(' ').map((r: string) => r.toUpperCase())
    setRoles(rolesFromScope)
    localStorage.setItem('user_roles', JSON.stringify(rolesFromScope))

    return data
  }

  const register = async (data: {
    email: string
    password: string
    first_name: string
    last_name: string
    role?: 'STUDENT' | 'CURATOR' | 'ADMIN'
  }) => {
    await apiRegister({ ...data, role: data.role || 'STUDENT' }) // если роли нет то ты студент по умолчанию (ого как стих почти)
  }

  const logout = () => {
    setAccessToken(null)
    setRoles([])
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_roles')
  }

  return (
    <AuthContext.Provider value={{ accessToken, roles, isAuth: !!accessToken, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

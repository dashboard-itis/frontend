import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/shared/hooks/useAuth'
import { Role } from '@/shared/types/role'

type Props = {
  children: ReactElement
  roles?: Role[]
}

const getStoredRoles = (): Role[] => {
  const savedRoles = localStorage.getItem('user_roles')
  if (!savedRoles) return []

  try {
    const parsedRoles = JSON.parse(savedRoles)

    return Array.isArray(parsedRoles) ? parsedRoles : []
  } catch {
    return []
  }
}

export const RoleRoute = ({ children, roles }: Props) => {
  const { roles: userRoles, isLoading } = useAuth()

  if (isLoading) {
    return null
  }

  const rolesFromStorage = getStoredRoles()
  const effectiveRoles = userRoles.length > 0 ? userRoles : rolesFromStorage

  if (roles && !roles.some((role) => effectiveRoles.includes(role))) {
    return <Navigate to='/403' />
  }

  return children
}

import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/shared/hooks/useAuth'
import { Role } from '@/shared/types/role'

type Props = {
  children: ReactElement
  roles?: Role[]
}

export const RoleRoute = ({ children, roles }: Props) => {
  const { roles: userRoles } = useAuth()

  if (roles && !roles.some((role) => userRoles.includes(role))) {
    return <Navigate to='/403' />
  }

  return children
}

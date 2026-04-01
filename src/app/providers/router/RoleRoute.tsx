import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/shared/hooks/useAuth'

type Props = {
  children: ReactElement
  roles?: string[]
}

export const RoleRoute = ({ children, roles }: Props) => {
  const { roles: userRoles } = useAuth()

  if (roles && !roles.some((role) => userRoles.includes(role))) {
    return <Navigate to='/403' />
  }

  return children
}

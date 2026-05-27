import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/shared/hooks/useAuth'

type Props = {
  children: ReactElement
}

export const GuestRoute = ({ children }: Props) => {
  const { isAuth, roles } = useAuth()

  if (isAuth) {
    if (roles.includes('ADMIN')) return <Navigate to='/admin' replace />
    if (roles.includes('CURATOR')) return <Navigate to='/curator' replace />
    if (roles.includes('STUDENT')) return <Navigate to='/student' replace />
  }

  return children
}

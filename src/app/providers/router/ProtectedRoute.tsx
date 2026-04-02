import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/shared/hooks/useAuth'

interface Props {
  children: ReactElement
}

export const PrivateRoute = ({ children }: Props): ReactElement => {
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to='/login' />
  }

  return children
}

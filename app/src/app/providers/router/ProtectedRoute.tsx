import { Spin } from 'antd'
import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import styles from './ProtectedRoute.module.css'

import { useAuth } from '@/shared/hooks/useAuth'

interface Props {
  children: ReactElement
}

export const PrivateRoute = ({ children }: Props): ReactElement => {
  const { isAuth, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Spin size='large' />
      </div>
    )
  }

  if (!isAuth) {
    return <Navigate to='/login' replace />
  }

  return children
}

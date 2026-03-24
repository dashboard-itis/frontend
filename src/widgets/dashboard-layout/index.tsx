import { Spin } from 'antd'
import React, { useState, useEffect } from 'react'

import { AdminDashboard } from './AdminDashboard'
import { CuratorDashboard } from './CuratorDashboard'
import { StudentDashboard } from './StudentDashboard'

import type { DashboardWidgetProps } from './dashboard-types'

const DashboardWidgetAntd: React.FC<DashboardWidgetProps> = ({
  role,
  curatorTab = 'dynamics',
  adminTab = 'users',
  isAnonymous,
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  if (loading) return <Spin tip='Загрузка...' style={{ width: '100%', margin: '32px 0' }} />

  switch (role) {
    case 'student':
      return <StudentDashboard isAnonymous={isAnonymous} />
    case 'curator':
      return <CuratorDashboard tab={curatorTab as 'distribution' | 'dynamics'} />
    case 'admin':
      return <AdminDashboard tab={adminTab as 'users' | 'import'} />
    default:
      return null
  }
}

export default DashboardWidgetAntd
export { StudentDashboard, CuratorDashboard, AdminDashboard }

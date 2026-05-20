import React from 'react'
import { useLocation } from 'react-router-dom'

import { CuratorDistributionTab } from './CuratorDistributionTab'
import { CuratorDynamicsTab } from './CuratorDynamicsTab'

//TODO: пока хардкод, после интеграции бэка исправляем
type CuratorDashboardProps = {
  tab?: 'distribution' | 'dynamics'
}

export const CuratorDashboard: React.FC<CuratorDashboardProps> = ({ tab }) => {
  const location = useLocation()

  const currentTab = location.pathname.includes('dynamics') ? 'dynamics' : 'distribution'
  //TODO: это хардкод, исправляем после подключения бэка
  const groupId = 1

  if (currentTab === 'dynamics') {
    return <CuratorDynamicsTab groupId={groupId} />
  }

  return <CuratorDistributionTab groupId={groupId} />
}

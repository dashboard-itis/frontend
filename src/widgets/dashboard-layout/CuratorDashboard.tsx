import React from 'react'
import { useLocation } from 'react-router-dom'

import { CuratorDistributionTab } from './CuratorDistributionTab'
import { CuratorDynamicsTab } from './CuratorDynamicsTab'

export const CuratorDashboard: React.FC = () => {
  const location = useLocation()

  const currentTab = location.pathname.includes('dynamics') ? 'dynamics' : 'distribution'
  //TODO: это хардкод, исправляем после подключения бэка
  const groupId = 1

  if (currentTab === 'dynamics') {
    return <CuratorDynamicsTab groupId={groupId} />
  }

  return <CuratorDistributionTab groupId={groupId} />
}

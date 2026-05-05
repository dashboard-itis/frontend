import React from 'react'
import { useParams } from 'react-router-dom'

import { CuratorDistributionTab } from './CuratorDistributionTab'
import { CuratorDynamicsTab } from './CuratorDynamicsTab'

export const CuratorDashboard: React.FC = () => {
  const { tab } = useParams<{ tab?: string }>()

  const currentTab = tab === 'analytics' ? 'dynamics' : 'distribution'
  const groupId = 1

  if (currentTab === 'dynamics') {
    return <CuratorDynamicsTab groupId={groupId} />
  }

  return <CuratorDistributionTab groupId={groupId} />
}

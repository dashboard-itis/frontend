import React from 'react'

import { CuratorDistributionTab } from './CuratorDistributionTab'
import { CuratorDynamicsTab } from './CuratorDynamicsTab'

type CuratorTab = 'distribution' | 'dynamics'

interface CuratorDashboardProps {
  tab?: CuratorTab
}

export const CuratorDashboard: React.FC<CuratorDashboardProps> = ({ tab = 'distribution' }) => {
  if (tab === 'dynamics') {
    return <CuratorDynamicsTab />
  }

  return <CuratorDistributionTab />
}

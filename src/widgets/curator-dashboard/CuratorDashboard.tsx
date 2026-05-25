import { Empty, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { CuratorDistributionTab } from './CuratorDistributionTab'
import { CuratorDynamicsTab } from './CuratorDynamicsTab'

import { getCurrentUser } from '@/shared/api/auth'

export const CuratorDashboard: React.FC = () => {
  const location = useLocation()
  const [groupId, setGroupId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentUser()
      .then((user) => setGroupId(user.group_id ?? null))
      .catch(() => setGroupId(null))
      .finally(() => setLoading(false))
  }, [])

  const currentTab = location.pathname.includes('dynamics') ? 'dynamics' : 'distribution'

  if (loading) {
    return <Spin style={{ display: 'block', margin: '80px auto' }} />
  }

  if (!groupId) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <Empty
          description={
            <span
              style={{
                color: 'var(--color-text-light)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body)',
              }}
            >
              Группа не назначена
              <br />
              Обратитесь к администратору
            </span>
          }
        />
      </div>
    )
  }

  if (currentTab === 'dynamics') {
    return <CuratorDynamicsTab groupId={groupId} />
  }

  return <CuratorDistributionTab groupId={groupId} />
}

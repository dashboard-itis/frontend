import { Table, Typography } from 'antd'
import React, { useState, useEffect } from 'react'

import { MOCK_STATS } from './dashboard-types'

const { Title } = Typography

export const CuratorDistributionTab: React.FC = () => {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    setTimeout(() => {
      setStats(MOCK_STATS)
    }, 800)
  }, [])

  if (!stats) return null

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <Title level={3}>Статистика моей группы</Title>
      <Title level={4} style={{ marginBottom: 8 }}>
        Распределение оценок
      </Title>
      <div
        style={{
          background: '#e0e0e0',
          textAlign: 'center',
          marginBottom: 8,
          padding: '24px',
          borderRadius: '8px',
        }}
      >
        Динамика
      </div>
      <Table
        dataSource={stats.students.map((s: any, idx: number) => ({ key: idx, ...s }))}
        columns={[
          { title: 'Студент', dataIndex: 'name', key: 'name' },
          { title: stats.disciplines[0], dataIndex: 'math', key: 'math' },
          { title: stats.disciplines[1], dataIndex: 'prog', key: 'prog' },
          { title: stats.disciplines[2], dataIndex: 'physics', key: 'physics' },
        ]}
        pagination={false}
      />
    </div>
  )
}

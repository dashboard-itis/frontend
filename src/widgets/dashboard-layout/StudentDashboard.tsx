import { Table, Typography } from 'antd'
import React, { useState, useEffect } from 'react'

import { MOCK_STATS } from './dashboard-types'

const { Title, Text } = Typography

interface StudentDashboardProps {
  isAnonymous?: boolean
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ isAnonymous = false }) => {
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

      <Table
        dataSource={stats.students.map((s: any, idx: number) => ({
          key: idx,
          ...s,
          name: isAnonymous ? 'Студент ' + (idx + 1) : s.name,
        }))}
        columns={[
          { title: 'Студент', dataIndex: 'name', key: 'name' },
          { title: stats.disciplines[0], dataIndex: 'math', key: 'math' },
          { title: stats.disciplines[1], dataIndex: 'prog', key: 'prog' },
          { title: stats.disciplines[2], dataIndex: 'physics', key: 'physics' },
        ]}
        pagination={false}
      />

      <Text type='secondary' style={{ display: 'block', marginTop: 16, marginBottom: 12 }}>
        {isAnonymous
          ? 'Статистика группы обезличена (данные других студентов скрыты)'
          : 'Вы видите общую статистику группы'}
      </Text>
    </div>
  )
}

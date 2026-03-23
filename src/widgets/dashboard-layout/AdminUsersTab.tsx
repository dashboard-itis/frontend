import { Table, Typography, Select } from 'antd'
import React, { useState, useEffect } from 'react'

import { MOCK_STATS } from './dashboard-types'

const { Title } = Typography

export const AdminUsersTab: React.FC = () => {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    setTimeout(() => {
      setStats(MOCK_STATS)
    }, 800)
  }, [])

  if (!stats) return null

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <Title level={3}>Управление пользователями</Title>
      <Table
        dataSource={stats.users.map((u: any, idx: number) => ({ key: idx, ...u }))}
        columns={[
          { title: 'Фамилия', dataIndex: 'surname', key: 'surname' },
          { title: 'Имя', dataIndex: 'name', key: 'name' },
          { title: 'Отчество', dataIndex: 'patronymic', key: 'patronymic' },
          { title: 'Группа', dataIndex: 'group', key: 'group' },
          { title: 'Почта', dataIndex: 'email', key: 'email' },
          {
            title: 'Доступ',
            dataIndex: 'access',
            key: 'access',
            render: (access: string) => (
              <Select
                value={access}
                style={{ minWidth: 100 }}
                disabled
                options={[
                  { value: 'Анонимный', label: 'Анонимный' },
                  { value: 'Общий', label: 'Общий' },
                ]}
              />
            ),
          },
          {
            title: 'Роль',
            dataIndex: 'role',
            key: 'role',
            render: (role: string) => (
              <Select
                value={role}
                style={{ minWidth: 100 }}
                disabled
                options={[
                  { value: 'Студент', label: 'Студент' },
                  { value: 'Куратор', label: 'Куратор' },
                  { value: 'Админ', label: 'Админ' },
                ]}
              />
            ),
          },
        ]}
        pagination={false}
      />
    </div>
  )
}

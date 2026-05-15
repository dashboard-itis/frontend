import { Table, Select, Button, Popconfirm, Spin, Empty } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from './DashboardWidget.module.css'

import { groups } from '@/shared/mocks/groups'
import { users as mockUsers } from '@/shared/mocks/users'

import type { UserPublic } from '@/shared/api/api'
//TODO: так как у бэковского юзера нет роли мы добавляем расширение
type DashboardUser = UserPublic & {
  role?: 'STUDENT' | 'CURATOR' | 'ADMIN'
  access?: 'Анонимный' | 'Общий'
}

export const AdminUsersTab: React.FC = () => {
  const [users, setUsers] = useState<DashboardUser[]>([])
  const [group, setGroup] = useState<string>('all')
  const [isLoaded, setIsLoaded] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('users')

    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setUsers(parsed)
          setIsLoaded(true)
          setLoading(false)
          return
        }
      } catch {}
    }

    setUsers(mockUsers as DashboardUser[])
    setIsLoaded(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    localStorage.setItem('users', JSON.stringify(users))
  }, [users, isLoaded])

  useEffect(() => {
    const updateGroup = () => {
      setGroup(localStorage.getItem('selectedGroup') || 'all')
    }

    updateGroup()
    window.addEventListener('groupChanged', updateGroup)

    return () => window.removeEventListener('groupChanged', updateGroup)
  }, [])

  const filteredUsers = group === 'all' ? users : users.filter((u) => String(u.group_id) === group)

  const getGroupName = (id: number | null) => {
    if (!id) return '-'
    return groups.find((g) => g.id === id)?.name || '-'
  }

  return (
    <Spin spinning={loading} tip='Загрузка...'>
      <div>
        <h2 className={styles.dwTitle}>управление пользователями</h2>
        <div className={styles.dashboardContainer}>
          {filteredUsers.length === 0 ? (
            <Empty description='Нет пользователей' />
          ) : (
            <Table
              dataSource={filteredUsers.map((u) => ({
                key: u.id,
                ...u,
              }))}
              columns={[
                { title: 'Фамилия', dataIndex: 'last_name' },
                { title: 'Имя', dataIndex: 'first_name' },
                {
                  title: 'Группа',
                  render: (_: any, record: any) => getGroupName(record.group_id),
                },
                { title: 'Почта', dataIndex: 'email' },
                {
                  title: 'Доступ',
                  render: (_: any, record: any) => (
                    <Select
                      value={record.access || 'Общий'}
                      style={{ width: 140 }}
                      onChange={(value) =>
                        setUsers((prev) => prev.map((u) => (u.id === record.id ? { ...u, access: value } : u)))
                      }
                      options={[
                        { value: 'Анонимный', label: 'Анонимный' },
                        { value: 'Общий', label: 'Общий' },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Роль',
                  render: (_: any, record: any) => (
                    <Select
                      value={record.role}
                      style={{ width: 140 }}
                      onChange={(value) =>
                        setUsers((prev) => prev.map((u) => (u.id === record.id ? { ...u, role: value } : u)))
                      }
                      options={[
                        { value: 'STUDENT', label: 'Студент' },
                        { value: 'CURATOR', label: 'Куратор' },
                        { value: 'ADMIN', label: 'Админ' },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Действия',
                  render: (_: any, record: any) => (
                    <Popconfirm
                      title='Удалить пользователя?'
                      onConfirm={() => setUsers((prev) => prev.filter((u) => u.id !== record.id))}
                      okText='Да'
                      cancelText='Нет'
                    >
                      <Button type='link' danger>
                        Удалить
                      </Button>
                    </Popconfirm>
                  ),
                },
              ]}
              pagination={false}
              scroll={{ x: 'max-content' }}
            />
          )}
        </div>
      </div>
    </Spin>
  )
}

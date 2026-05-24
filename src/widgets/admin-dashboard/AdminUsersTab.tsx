import { Table, Select, Button, Popconfirm, Spin, Empty, message, Modal, Input, InputNumber } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from '../dashboard-layout/DashboardWidget.module.css'

import { createGroup, getGroups } from '@/shared/api/groups'
import { deleteUser, getUsers, updateUser, updateUserRoles } from '@/shared/api/users'
import { getPrimaryUserRole, hasUserRole } from '@/shared/lib/roles'

import type { GroupPublic, UserPublic } from '@/shared/api/api'
import type { Role } from '@/shared/types/role'

const roleOptions: { value: Role; label: string }[] = [
  { value: 'STUDENT', label: 'Студент' },
  { value: 'CURATOR', label: 'Куратор' },
]

export const AdminUsersTab: React.FC = () => {
  const [users, setUsers] = useState<UserPublic[]>([])
  const [groups, setGroups] = useState<GroupPublic[]>([])
  const [group, setGroup] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [updatingUserId, setUpdatingUserId] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [groupYear, setGroupYear] = useState<number | null>(null)
  const [creatingGroup, setCreatingGroup] = useState(false)

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [usersData, groupsData] = await Promise.all([getUsers(), getGroups()])

      setUsers(usersData)
      setGroups(groupsData)
    } catch (err) {
      console.error(err)
      setError('Не удалось загрузить пользователей')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    const updateGroup = () => {
      setGroup(localStorage.getItem('selectedGroup') || 'all')
    }

    updateGroup()
    window.addEventListener('groupChanged', updateGroup)

    return () => window.removeEventListener('groupChanged', updateGroup)
  }, [])

  const filteredUsers = group === 'all' ? users : users.filter((u) => String(u.group_id) === group)

  const getGroupName = (id?: number | null) => {
    if (!id) return '-'
    return groups.find((g) => g.id === id)?.name || '-'
  }

  const groupOptions = [
    { value: 'none', label: 'Без группы' },
    ...groups
      .filter((item): item is GroupPublic & { id: number } => item.id != null)
      .map((item) => ({
        value: String(item.id),
        label: item.name,
      })),
  ]

  const handleCreateGroup = async () => {
    const name = groupName.trim()

    if (!name) {
      message.error('Введите название группы')
      return
    }

    try {
      setCreatingGroup(true)
      const createdGroup = await createGroup({ name, year: groupYear })

      setGroups((prev) => [...prev, createdGroup])
      setGroupName('')
      setGroupYear(null)
      setIsGroupModalOpen(false)
      window.dispatchEvent(new Event('groupsChanged'))
      message.success('Группа добавлена')
    } catch (err) {
      console.error(err)
      message.error('Не удалось добавить группу')
    } finally {
      setCreatingGroup(false)
    }
  }

  const handleChangeGroup = async (user: UserPublic, value: string) => {
    if (user.id == null) return

    const groupId = value === 'none' ? null : Number(value)

    try {
      setUpdatingUserId(user.id)
      const updatedUser = await updateUser(user.id, { group_id: groupId })

      setUsers((prev) => prev.map((item) => (item.id === user.id ? updatedUser : item)))
      message.success('Группа обновлена')
    } catch (err) {
      console.error(err)
      message.error('Не удалось обновить группу')
    } finally {
      setUpdatingUserId(null)
    }
  }

  const handleChangeRole = async (user: UserPublic, value: Role) => {
    if (user.id == null) return

    try {
      setUpdatingUserId(user.id)
      const updatedUser = await updateUserRoles(user.id, [value.toLowerCase()])

      setUsers((prev) => prev.map((item) => (item.id === user.id ? updatedUser : item)))
      message.success('Роль обновлена')
    } catch (err) {
      console.error(err)
      message.error('Не удалось обновить роль')
    } finally {
      setUpdatingUserId(null)
    }
  }

  const handleDeleteUser = async (userId?: number | null) => {
    if (userId == null) return

    try {
      setUpdatingUserId(userId)
      await deleteUser(userId)
      setUsers((prev) => prev.filter((user) => user.id !== userId))
    } catch (err) {
      console.error(err)
      message.error('Не удалось удалить пользователя')
    } finally {
      setUpdatingUserId(null)
    }
  }

  return (
    <Spin spinning={loading} tip='Загрузка...'>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 className={styles.dwTitle}>управление пользователями</h2>

          <Button type='primary' onClick={() => setIsGroupModalOpen(true)}>
            Добавить группу
          </Button>
        </div>

        <div className={styles.dashboardContainer}>
          {error && <div style={{ color: 'red', marginBottom: 16 }}>Ошибка: {error}</div>}

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
                  render: (_: unknown, record: UserPublic) =>
                    hasUserRole(record, 'STUDENT') ? (
                      <Select
                        value={record.group_id == null ? 'none' : String(record.group_id)}
                        style={{ width: 160 }}
                        loading={updatingUserId === record.id}
                        onChange={(value) => handleChangeGroup(record, value)}
                        options={groupOptions}
                      />
                    ) : (
                      getGroupName(record.group_id)
                    ),
                },
                { title: 'Почта', dataIndex: 'email' },
                {
                  title: 'Роль',
                  render: (_: unknown, record: UserPublic) => {
                    const currentRole = getPrimaryUserRole(record)
                    const isAdmin = currentRole === 'ADMIN'

                    return (
                      <Select
                        value={currentRole}
                        style={{ width: 140 }}
                        disabled={isAdmin}
                        loading={updatingUserId === record.id}
                        onChange={(value) => handleChangeRole(record, value)}
                        options={
                          isAdmin ? [{ value: 'ADMIN', label: 'Админ', disabled: true }, ...roleOptions] : roleOptions
                        }
                      />
                    )
                  },
                },
                {
                  title: 'Действия',
                  render: (_: unknown, record: UserPublic) => (
                    <Popconfirm
                      title='Удалить пользователя?'
                      onConfirm={() => handleDeleteUser(record.id)}
                      okText='Да'
                      cancelText='Нет'
                    >
                      <Button type='link' danger loading={updatingUserId === record.id}>
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

        <Modal
          title='Добавить группу'
          open={isGroupModalOpen}
          onOk={handleCreateGroup}
          onCancel={() => setIsGroupModalOpen(false)}
          confirmLoading={creatingGroup}
          okText='Добавить'
          cancelText='Отмена'
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Input
              placeholder='Название группы'
              value={groupName}
              onChange={(event) => setGroupName(event.target.value)}
            />
            <InputNumber
              placeholder='Год'
              value={groupYear}
              onChange={(value) => setGroupYear(typeof value === 'number' ? value : null)}
              style={{ width: '100%' }}
            />
          </div>
        </Modal>
      </div>
    </Spin>
  )
}

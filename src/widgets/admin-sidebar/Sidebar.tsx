import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { groups } from '@/shared/mocks/groups'
import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'
import SidebarProfile, { roleAvatars } from '@/shared/ui/SidebarProfile'

const AdminSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [group, setGroup] = useState<string>('all')
  useEffect(() => {
    const saved = localStorage.getItem('selectedGroup')

    if (saved) {
      setGroup(saved)
    } else {
      localStorage.setItem('selectedGroup', 'all')
      setGroup('all')
    }
  }, [])

  const handleChange = (value: string) => {
    setGroup(value)
    localStorage.setItem('selectedGroup', value)
    window.dispatchEvent(new Event('groupChanged'))
  }

  const items: SidebarItem[] = [
    {
      label: 'Импорт данных',
      isActive: location.pathname.includes('/admin/import'),
      onClick: () => navigate('/admin/import'),
    },
    {
      label: 'Управление пользователями',
      isActive: location.pathname.includes('/admin/users'),
      onClick: () => navigate('/admin/users'),
    },
    {
      label: 'Текущие оценки',
      isActive: location.pathname.includes('/admin/grades'),
      onClick: () => navigate('/admin/grades'),
    },
    {
      label: 'Управление оценками',
      isActive: location.pathname.includes('grades-management'),
      onClick: () => navigate('/admin/grades-management'),
    },
    {
      label: (
        <div>
          <Select
            style={{ width: '250px' }}
            size='large'
            value={group}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Все' },
              ...groups.map((g) => ({
                value: String(g.id),
                label: g.name,
              })),
            ]}
          />
        </div>
      ),
      isActive: false,
      onClick: () => {},
    },
  ]

  return (
    <Sidebar
      items={items}
      headerContent={<SidebarProfile avatar={roleAvatars.admin} fullName='Шарапова Диана Рустамовна' />}
    />
  )
}

export default AdminSidebar

import { Select } from 'antd'
import React, { useEffect, useState } from 'react'

import { HiChartBar, HiOutlineUpload, HiOutlineUsers } from 'react-icons/hi'

import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { useNavigate, useLocation } from 'react-router-dom'

import { groups } from '@/shared/mocks/groups'
import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'

import styles from '@/widgets/student-sidebar/StudentSidebar.module.css'

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

  const headerContent = (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/logo-circle.png`} alt='logo' className={styles.logoImage} />

        <div className={styles.logoText}>SecCur</div>
      </div>

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <HiOutlineUsers />
        </div>

        <div className={styles.name}>Шарапова Диана</div>
      </div>
    </div>
  )

  const items: SidebarItem[] = [
    {
      label: (
        <div className={styles.menuItem}>
          <HiChartBar />

          <span>Дашборд</span>
        </div>
      ),

      isActive: location.pathname === '/admin/dashboard',

      onClick: () => navigate('/admin/dashboard'),
    },
    {
      label: (
        <div className={styles.menuItem}>
          <MdOutlineSpaceDashboard />

          <span>Импорт данных</span>
        </div>
      ),

      isActive: location.pathname === '/admin/import',

      onClick: () => navigate('/admin/import'),
    },
    {
      label: (
        <div className={styles.menuItem}>
          <HiOutlineUsers />

          <span>Управление пользователями</span>
        </div>
      ),

      isActive: location.pathname === '/admin/users',

      onClick: () => navigate('/admin/users'),
    },
    {
      label: (
        <div className={styles.menuItem}>
          <HiChartBar />

          <span>Текущие оценки</span>
        </div>
      ),

      isActive: location.pathname === '/admin/grades',

      onClick: () => navigate('/admin/grades'),
    },
    {
      label: (
        <div className={styles.menuItem}>
          <HiOutlineUpload />

          <span>Управление оценками</span>
        </div>
      ),

      isActive: location.pathname === '/admin/grades-management',

      onClick: () => navigate('/admin/grades-management'),
    },
    {
      label: (
        <div className={styles.selectWrapper}>
          <Select
            className={styles.select}
            size='large'
            value={group}
            onChange={handleChange}
            options={[
              {
                value: 'all',
                label: 'Все группы',
              },

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

  return <Sidebar items={items} headerContent={headerContent} showLogout={true} />
}

export default AdminSidebar

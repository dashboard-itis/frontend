import { Select } from 'antd'
import React, { useEffect, useState } from 'react'

import { HiChartBar, HiOutlineUpload, HiOutlineUsers } from 'react-icons/hi'

import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { useNavigate, useLocation } from 'react-router-dom'

import { getCurrentUser } from '@/shared/api/auth'
import { getGroups } from '@/shared/api/groups'
import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'

import styles from '@/widgets/student-sidebar/StudentSidebar.module.css'

import type { GroupPublic, UserPublic } from '@/shared/api/api'

const AdminSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [group, setGroup] = useState<string>('all')
  const [groups, setGroups] = useState<GroupPublic[]>([])
  const [user, setUser] = useState<UserPublic | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('selectedGroup')

    if (saved) {
      setGroup(saved)
    } else {
      localStorage.setItem('selectedGroup', 'all')
      setGroup('all')
    }
  }, [])

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const data = await getGroups()
        setGroups(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchGroups()

    window.addEventListener('groupsChanged', fetchGroups)

    return () => window.removeEventListener('groupsChanged', fetchGroups)
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser()
        setUser(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUser()

    window.addEventListener('userChanged', fetchUser)

    return () => window.removeEventListener('userChanged', fetchUser)
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

        <div className={styles.name}>{user ? `${user.first_name} ${user.last_name}` : 'Пользователь'}</div>
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

              ...groups
                .filter((g): g is GroupPublic & { id: number } => g.id != null)
                .map((g) => ({
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

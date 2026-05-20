import { message } from 'antd'

import { HiChartBar, HiOutlineDownload, HiOutlineUserGroup, HiTrendingUp } from 'react-icons/hi'

import { MdOutlineSpaceDashboard } from 'react-icons/md'

import { useLocation, useNavigate } from 'react-router-dom'

import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'

import styles from '@/widgets/student-sidebar/StudentSidebar.module.css'

function CuratorSidebar() {
  const navigate = useNavigate()

  const location = useLocation()

  const items: SidebarItem[] = [
    {
      label: (
        <div className={styles.menuItem}>
          <MdOutlineSpaceDashboard />

          <span>Дашборд</span>
        </div>
      ),

      isActive: location.pathname === '/curator/dashboard',

      onClick: () => navigate('/curator/dashboard'),
    },

    {
      label: (
        <div className={styles.menuItem}>
          <HiChartBar />

          <span>Распределение оценок</span>
        </div>
      ),

      isActive: location.pathname === '/curator/distribution',

      onClick: () => navigate('/curator/distribution'),
    },

    {
      label: (
        <div className={styles.menuItem}>
          <HiTrendingUp />

          <span>Динамика</span>
        </div>
      ),

      isActive: location.pathname === '/curator/dynamics',

      onClick: () => navigate('/curator/dynamics'),
    },

    {
      label: (
        <div className={styles.menuItem}>
          <HiOutlineDownload />

          <span>Экспорт отчетов</span>
        </div>
      ),

      isActive: false,

      onClick: () => message.info('Функция экспорта отчетов находится в разработке'),
    },
  ]

  const headerContent = (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/logo-circle.png`} alt='logo' className={styles.logoImage} />

        <div className={styles.logoText}>SecCur</div>
      </div>

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <HiOutlineUserGroup />
        </div>

        <div className={styles.name}>Сидорина Арина Аркадьевна</div>
      </div>
    </div>
  )

  return <Sidebar items={items} headerContent={headerContent} />
}

export default CuratorSidebar

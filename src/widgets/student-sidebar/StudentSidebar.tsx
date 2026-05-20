import { HiChartBar } from 'react-icons/hi'

import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { PiStudentBold } from 'react-icons/pi'

import { useLocation, useNavigate } from 'react-router-dom'

import styles from './StudentSidebar.module.css'

import { Sidebar } from '@/shared/ui/Sidebar'

const StudentSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const headerContent = (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/logo-circle.png`} alt='logo' className={styles.logoImage} />

        <div className={styles.logoText}>SecCur</div>
      </div>

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <PiStudentBold />
        </div>

        <div className={styles.name}>Иванов Петров</div>
      </div>
    </div>
  )

  const items = [
    {
      label: (
        <>
          <MdOutlineSpaceDashboard />
          Дашборд
        </>
      ),
      isActive: location.pathname === '/student/dashboard',
      onClick: () => navigate('/student/dashboard'),
    },
    {
      label: (
        <>
          <HiChartBar />
          Оценки
        </>
      ),
      isActive: location.pathname === '/student/grades',
      onClick: () => navigate('/student/grades'),
    },
  ]
  return <Sidebar items={items} headerContent={headerContent} showLogout={true} />
}
export default StudentSidebar

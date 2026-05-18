import { useLocation, useNavigate } from 'react-router-dom'

import { Sidebar } from '@/shared/ui/Sidebar'
import SidebarProfile, { roleAvatars } from '@/shared/ui/SidebarProfile'

const StudentSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const headerContent = (
    <>
      <SidebarProfile avatar={roleAvatars.student} fullName='Иванов Петров' />
    </>
  )

  const items = [
    {
      label: 'Дашборд',
      isActive: location.pathname === '/student/dashboard',
      onClick: () => navigate('/student/dashboard'),
    },
    {
      label: 'Оценки',
      isActive: location.pathname === '/student/grades',
      onClick: () => navigate('/student/grades'),
    },
  ]
  return <Sidebar items={items} headerContent={headerContent} showLogout={true} />
}
export default StudentSidebar

import { useNavigate, useLocation } from 'react-router-dom'

import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'
import SidebarProfile, { roleAvatars } from '@/shared/ui/SidebarProfile'
import SidebarInfoCard from '@/widgets/student-sidebar/SidebarInfoCard'

function CuratorSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const averageGroupScore: number = 4.3

  const items: SidebarItem[] = [
    {
      label: 'Распределение оценок',
      isActive: location.pathname.includes('distribution'),
      onClick: () => navigate('/curator/distribution'),
    },
    {
      label: 'Динамика',
      isActive: location.pathname.includes('dynamics'),
      onClick: () => navigate('/curator/dynamics'),
    },
  ]

  const headerContent = (
    <>
      <SidebarProfile avatar={roleAvatars.curator} fullName='Сидорина Арина Аркадьевна' />
      <SidebarInfoCard label='Средний балл группы:' value={averageGroupScore} />
    </>
  )

  return <Sidebar items={items} headerContent={headerContent} />
}

export default CuratorSidebar

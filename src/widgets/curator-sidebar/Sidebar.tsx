import { useNavigate, useLocation } from 'react-router-dom'

import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'
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
      isActive: location.pathname.includes('analytics'),
      onClick: () => navigate('/curator/analytics'),
    },
  ]

  return (
    <Sidebar items={items} headerContent={<SidebarInfoCard label='Средний балл группы:' value={averageGroupScore} />} />
  )
}

export default CuratorSidebar

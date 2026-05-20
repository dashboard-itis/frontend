import { message } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'
import SidebarProfile, { roleAvatars } from '@/shared/ui/SidebarProfile'

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
    {
      label: 'Экспорт отчетов',
      isActive: false,
      onClick: () => message.info('Функция экспорта отчетов находится в разработке'),
    },
  ]

  const headerContent = (
    <>
      <SidebarProfile avatar={roleAvatars.curator} fullName='Сидорина Арина Аркадьевна' />
    </>
  )

  return <Sidebar items={items} headerContent={headerContent} />
}

export default CuratorSidebar

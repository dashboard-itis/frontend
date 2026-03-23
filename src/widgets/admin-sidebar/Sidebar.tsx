import { useNavigate, useLocation } from 'react-router-dom'

import { Sidebar, type SidebarItem } from '@/shared/ui/Sidebar'

const AdminSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

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
  ]

  return <Sidebar items={items} />
}

export default AdminSidebar

import { Outlet } from 'react-router-dom'

import CuratorSidebar from '@/widgets/curator-sidebar/Sidebar'

export const CuratorLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CuratorSidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  )
}

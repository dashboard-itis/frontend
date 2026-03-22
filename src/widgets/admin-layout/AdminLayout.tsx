import { Outlet } from 'react-router-dom'
import Sidebar from 'widgets/admin-sidebar/Sidebar'

export const AdminLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </div>
        </div>
    )
}
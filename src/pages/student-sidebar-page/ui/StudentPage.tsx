import { Outlet } from 'react-router-dom'

import StudentSidebar from '@/widgets/student-sidebar/Sidebar'

function StudentPage() {
  return (
    <div style={{ display: 'flex' }}>
      <StudentSidebar />
      <div style={{ padding: '20px', flex: 1 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default StudentPage

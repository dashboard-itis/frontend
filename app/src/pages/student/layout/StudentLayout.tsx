import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { getCurrentUser } from '@/shared/api/auth'

import StudentSidebar from '@/widgets/student-sidebar/StudentSidebar'

function StudentPage() {
  const [loading, setLoading] = useState(true)

  const [hasGroup, setHasGroup] = useState(false)

  useEffect(() => {
    const checkGroup = async () => {
      try {
        const user = await getCurrentUser()

        setHasGroup(!!user.group_id)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    checkGroup()
  }, [])

  if (loading) {
    return null
  }

  if (!hasGroup) {
    return <Navigate to='/waiting-group' />
  }

  return (
    <div style={{ display: 'flex' }}>
      <StudentSidebar />

      <div
        style={{
          padding: '20px',
          flex: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default StudentPage

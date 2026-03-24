import StudentSidebar from '../../../widgets/student-sidebar/Sidebar'

function StudentPage() {
  return (
    <div style={{ display: 'flex' }}>
      <StudentSidebar />
      <div style={{ padding: '20px' }}>
        <h1>Страница студента</h1>
      </div>
    </div>
  )
}

export default StudentPage

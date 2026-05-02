import { Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

import { studentGrades } from '@/shared/mocks/grades'
import { users as mockUsers } from '@/shared/mocks/users'

const { Title } = Typography

export const AdminGradesTab: React.FC = () => {
  const [grades, setGrades] = useState<any[]>([])
  const [group, setGroup] = useState<string>('all')
  useEffect(() => {
    setGrades(studentGrades)
  }, [])
  useEffect(() => {
    const updateGroup = () => {
      setGroup(localStorage.getItem('selectedGroup') || 'all')
    }

    updateGroup()
    window.addEventListener('groupChanged', updateGroup)

    return () => window.removeEventListener('groupChanged', updateGroup)
  }, [])
  const users = JSON.parse(localStorage.getItem('users') || 'null') || mockUsers
  const students = users.filter((u) => u.role === 'STUDENT')
  const getStudentName = (id: number) => {
    const user = users.find((u: any) => u.id === id)
    return user ? `${user.first_name} ${user.last_name}` : `ID: ${id}`
  }
  const filteredStudents = group === 'all' ? students : students.filter((u) => String(u.group_id) === group)

  const studentIds = filteredStudents.map((u) => u.id)

  const filteredGrades = grades.filter((g) => studentIds.includes(g.student_id))
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <Title level={3}>Текущие оценки</Title>

      <Table
        dataSource={filteredGrades.map((g) => ({
          key: `${g.id}-${g.student_id}`,
          studentId: g.student_id,
          studentName: getStudentName(g.student_id),
          course: g.course_name,
          score: g.score,
        }))}
        columns={[
          { title: 'Студент ID', dataIndex: 'studentId' },
          { title: 'Имя и фамилия', dataIndex: 'studentName' },
          { title: 'Предмет', dataIndex: 'course' },
          { title: 'Оценка', dataIndex: 'score' },
        ]}
        locale={{ emptyText: 'Нет данных' }}
        pagination={false}
      />
    </div>
  )
}

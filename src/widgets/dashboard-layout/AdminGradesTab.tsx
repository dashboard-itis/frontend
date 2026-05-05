import { Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

import { getStudentGrades } from '@/shared/api/grades'

import { getUsers } from '@/shared/api/users'

import type { User } from '@/shared/api/api'
import type { StudentGrade } from '@/shared/types/dashboard'

const { Title } = Typography

export const AdminGradesTab: React.FC = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [group, setGroup] = useState<string>('all')

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  useEffect(() => {
    const updateGroup = () => {
      setGroup(localStorage.getItem('selectedGroup') || 'all')
    }

    updateGroup()
    window.addEventListener('groupChanged', updateGroup)

    return () => window.removeEventListener('groupChanged', updateGroup)
  }, [])

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const students = users.filter((u) => u.role === 'STUDENT')

        const allGrades = await Promise.all(students.map((student) => getStudentGrades(student.id)))
        const flatGrades = allGrades.flat()

        setGrades(flatGrades)
      } catch (e) {
        console.error(e)
      }
    }

    if (users.length > 0) {
      fetchGrades()
    }
  }, [users])

  const students = users.filter((u) => u.role === 'STUDENT')
  const filteredStudents = group === 'all' ? students : students.filter((u) => String(u.group_id) === group)

  const studentIds = filteredStudents.map((u) => u.id)

  const filteredGrades = grades.filter((g) => studentIds.includes(g.student_id))

  const getStudentName = (id: number) => {
    const user = users.find((u) => u.id === id)
    return user ? `${user.first_name} ${user.last_name}` : `ID: ${id}`
  }

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

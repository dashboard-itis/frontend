import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from './DashboardWidget.module.css'

import { getStudentGrades } from '@/shared/api/grades'

import { getUsers } from '@/shared/api/users'

import type { UserPublic } from '@/shared/api/api'
import type { StudentGrade } from '@/shared/types/dashboard'

type DashboardUser = UserPublic & {
  role?: 'STUDENT' | 'CURATOR' | 'ADMIN'
}

export const AdminGradesTab: React.FC = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])
  const [users, setUsers] = useState<DashboardUser[]>([])
  const [group, setGroup] = useState<string>('all')

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  useEffect(() => {
    const updateGroup = () => {
      setGroup(localStorage.getItem('selectedGroup') || 'all')
    }

    updateGroup()
    // TODO: заменить на context или state management
    window.addEventListener('groupChanged', updateGroup)

    return () => window.removeEventListener('groupChanged', updateGroup)
  }, [])

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const students = users.filter(
          (u): u is DashboardUser & { id: number } => u.role === 'STUDENT' && typeof u.id === 'number',
        )

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
    <div>
      <h2 className={styles.dwTitle}>Текущие оценки</h2>

      <Table
        className={styles.dashboardContainer}
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

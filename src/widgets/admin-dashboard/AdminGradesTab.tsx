import { Table, Spin, Empty } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from '../dashboard-layout/DashboardWidget.module.css'

import { getStudentGrades } from '@/shared/api/grades'
import { getGroups } from '@/shared/api/groups'
import { getUsers } from '@/shared/api/users'
import { hasUserRole } from '@/shared/lib/roles'

import type { GroupPublic } from '@/shared/api/api'
import type { UserPublic } from '@/shared/api/api'
import type { StudentGrade } from '@/shared/types/dashboard'

export const AdminGradesTab: React.FC = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])
  const [users, setUsers] = useState<UserPublic[]>([])
  const [group, setGroup] = useState<string>('all')
  const [groups, setGroups] = useState<GroupPublic[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        setLoading(true)
        setError(null)
        const [usersData, groupsData] = await Promise.all([getUsers(), getGroups()])

        setUsers(usersData)
        setGroups(groupsData)
      } catch (err) {
        console.error(err)
        setError('Не удалось загрузить пользователей')
      } finally {
        setLoading(false)
      }
    }
    fetchUsersData()
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
        setLoading(true)
        setError(null)
        const students = users.filter(
          (u): u is UserPublic & { id: number } => hasUserRole(u, 'STUDENT') && u.id != null,
        )

        const allGrades = await Promise.all(students.map((student) => getStudentGrades(student.id)))
        const flatGrades = allGrades.flat()

        setGrades(flatGrades)
      } catch (e) {
        console.error(e)
        setError('Не удалось загрузить оценки')
      } finally {
        setLoading(false)
      }
    }

    if (users.length > 0) {
      fetchGrades()
    }
  }, [users])

  const students = users.filter((u) => hasUserRole(u, 'STUDENT'))
  const filteredStudents = group === 'all' ? students : students.filter((u) => String(u.group_id) === group)

  const studentIds = filteredStudents.map((u) => u.id)

  const filteredGrades = grades.filter((g) => studentIds.includes(g.student_id))

  const getStudentName = (id: number) => {
    const user = users.find((u) => u.id === id)
    return user ? `${user.first_name} ${user.last_name}` : `ID: ${id}`
  }

  return (
    <Spin spinning={loading} tip='Загрузка...'>
      <div>
        <h2 className={styles.dwTitle}>Текущие оценки</h2>

        {error && <div style={{ color: 'red', marginBottom: 16 }}>Ошибка: {error}</div>}

        {filteredGrades.length === 0 ? (
          <div className={styles.dashboardContainer}>
            <Empty description='Нет оценок' />
          </div>
        ) : (
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
              {
                title: 'Группа',
                render: (_, record) => {
                  const user = users.find((u) => u.id === record.studentId)

                  const group = groups.find((g) => g.id === user?.group_id)

                  return group?.name || '—'
                },
              },
              { title: 'Имя и фамилия', dataIndex: 'studentName' },
              { title: 'Предмет', dataIndex: 'course' },
              { title: 'Оценка', dataIndex: 'score' },
            ]}
            pagination={false}
          />
        )}
      </div>
    </Spin>
  )
}

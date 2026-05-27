import { Table, Spin, Alert } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from '../dashboard-layout/DashboardWidget.module.css'

import { getCourses } from '@/shared/api/courses'

import { getStudentGrades } from '@/shared/api/grades'

import { getRatings } from '@/shared/api/ratings'

import { RatingStudent, StudentGrade, TableRow } from '@/shared/types/dashboard'

interface CuratorDistributionTabProps {
  groupId: number
  semester?: 'SPRING' | 'FALL'
  year?: number
}

export const CuratorDistributionTab: React.FC<CuratorDistributionTabProps> = ({
  groupId,
  semester = 'SPRING',
  year = new Date().getFullYear(),
}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tableData, setTableData] = useState<TableRow[]>([])
  const [courseNames, setCourseNames] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [ratings, courses] = await Promise.all([getRatings(groupId, { semester, year }), getCourses()])

        const names = courses.map((c) => c.name)
        setCourseNames(names)

        if (!ratings || ratings.length === 0) {
          setTableData([])
          return
        }

        const studentsWithScores = await Promise.all(
          (ratings as RatingStudent[]).map(async (student) => {
            const grades = await getStudentGrades(student.student_id)

            const scores = names.reduce<Record<string, number>>((acc, discipline) => {
              acc[discipline] = 0
              return acc
            }, {})

            const total = grades.reduce((sum, grade: StudentGrade) => {
              const course = grade.course_name

              if (course && names.includes(course)) {
                scores[course] += grade.score
                return sum + grade.score
              }

              return sum
            }, 0)

            const average = names.length > 0 ? Math.round(total / names.length) : 0

            return {
              student_id: student.student_id,
              anonymized_id: student.anonymized_id,
              averageScore: average,
              scores,
            }
          }),
        )

        const sorted = [...studentsWithScores].sort((a, b) => b.averageScore - a.averageScore)
        const rows = sorted.map((student, idx) => ({
          key: student.student_id,
          rank: idx + 1,
          fullName: student.anonymized_id,
          averageScore: student.averageScore,
          ...student.scores,
        }))
        setTableData(rows)
      } catch (err) {
        console.error(err)
        setError('Не удалось загрузить данные')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [groupId, semester, year])

  if (loading) return <Spin tip='Загрузка...' style={{ width: '100%', margin: '32px 0' }} />
  if (error) return <Alert message={error} type='error' showIcon />
  if (tableData.length === 0) return <Alert message='Нет данных для отображения' type='info' showIcon />

  const columns = [
    {
      title: 'Место',
      dataIndex: 'rank',
      width: 80,
      align: 'center' as const,
      render: (rank: number) => <strong>{rank}</strong>,
    },
    {
      title: 'Студент',
      dataIndex: 'fullName',
      width: 200,
    },
    {
      title: 'Средний балл',
      dataIndex: 'averageScore',
      width: 110,
      align: 'center' as const,
      render: (avg: number) => <strong className={styles.averageScore}>{avg}</strong>,
    },
    ...courseNames.map((d) => ({
      title: d,
      dataIndex: d,
      key: d,
      width: 100,
      align: 'center' as const,
    })),
  ]

  return (
    <div>
      <h1 className={styles.dwTitle} style={{ marginBottom: 'var(--spacing-sm)' }}>
        Статистика моей группы
      </h1>
      <div className={styles.tableWrapper}>
        <div style={{ minWidth: 1200 }}>
          <Table
            className={styles.dashboardContainer}
            dataSource={tableData}
            columns={columns}
            pagination={false}
            bordered={false}
            size='middle'
            scroll={{ x: 1200 }}
            rowClassName={(_, index) => (index % 2 === 0 ? styles.tableRowLight : styles.tableRowDark)}
          />
        </div>
      </div>
    </div>
  )
}

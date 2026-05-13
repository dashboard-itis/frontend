import { Table, Spin, Alert } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from './DashboardWidget.module.css'

import { getStudentGrades } from '@/shared/api/grades'

import { getRatings } from '@/shared/api/ratings'

import { RatingStudent, StudentGrade, TableRow } from '@/shared/types/dashboard'

const disciplines = [
  'ОРИС',
  'Курс по выбору',
  'Инновационная экономика',
  'Английский',
  'Финансовая грамотность',
  'ТВИС',
  'Командная разработка',
]

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const ratings = await getRatings(groupId, { semester, year })
        if (!ratings || ratings.length === 0) {
          setTableData([])
          return
        }

        const studentsWithScores = await Promise.all(
          (ratings as RatingStudent[]).map(async (student) => {
            const grades = await getStudentGrades(student.student_id, { semester })

            const scores = disciplines.reduce<Record<string, number>>((acc, discipline) => {
              acc[discipline] = 0
              return acc
            }, {})

            const total = grades.reduce((sum, grade: StudentGrade) => {
              const course = grade.course_name

              if (course && disciplines.includes(course)) {
                scores[course] += grade.score
                return sum + grade.score
              }

              return sum
            }, 0)

            const average = disciplines.length > 0 ? Math.round(total / disciplines.length) : 0

            return {
              student_id: student.student_id,
              fullName: student.full_name,
              averageScore: average,
              scores,
            }
          }),
        )

        // по убыванию
        const sorted = [...studentsWithScores].sort((a, b) => b.averageScore - a.averageScore)
        const rows = sorted.map((student, idx) => ({
          key: student.student_id,
          rank: idx + 1,
          fullName: student.fullName,
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
      title: 'ФИО студента',
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
    ...disciplines.map((d) => ({
      title: d,
      dataIndex: d,
      key: d,
      width: 100,
      align: 'center' as const,
    })),
  ]

  return (
    <div>
      <h1 className={styles.dwTitle}>Статистика моей группы</h1>
      <Table
        style={{ marginTop: '71.46px' }}
        className={styles.dashboardContainer}
        dataSource={tableData}
        columns={columns}
        pagination={false}
        bordered={false}
        size='middle'
        scroll={{ x: 'max-content' }}
        rowClassName={(_, index) => (index % 2 === 0 ? styles.tableRowLight : styles.tableRowDark)}
      />
    </div>
  )
}

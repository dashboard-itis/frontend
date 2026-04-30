import { Table, Spin, Alert } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from './DashboardWidget.module.css'

import { getStudentGrades } from '../../shared/api/grades'

import { getRatings } from '../../shared/api/ratings'

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
  const [tableData, setTableData] = useState<any[]>([])

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
          ratings.map(async (student: any) => {
            const grades = await getStudentGrades(student.student_id, { semester })

            const scores: Record<string, number> = {}
            disciplines.forEach((d) => (scores[d] = 0))

            grades.forEach((grade: any) => {
              const course = grade.course_name
              if (disciplines.includes(course)) {
                scores[course] += grade.score
              }
            })

            let total = 0
            disciplines.forEach((d) => (total += scores[d]))
            const average = disciplines.length ? Math.round(total / disciplines.length) : 0

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
      render: (avg: number) => <strong style={{ color: '#1e3a8a' }}>{avg}</strong>,
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
    <div className={styles['dw-widget']} style={{ padding: '24px' }}>
      <h2 className={styles['dw-title']}>Статистика моей группы</h2>
      <h3 className={styles['dw-subtitle']}>Рейтинг студентов (по убыванию среднего балла)</h3>
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={false}
        bordered={false}
        size='middle'
        scroll={{ x: 'max-content' }}
        rowClassName={(_, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
      />
      <style>{`
        .table-row-light { background-color: #ffffff; }
        .table-row-dark { background-color: #f9fafb; }
        .ant-table-thead > tr > th {
          background-color: #f1f5f9;
          font-weight: 600;
          color: #1e293b;
          border-bottom: 2px solid #e2e8f0;
        }
        .ant-table-tbody > tr:hover > td {
          background-color: #eef2ff !important;
        }
      `}</style>
    </div>
  )
}

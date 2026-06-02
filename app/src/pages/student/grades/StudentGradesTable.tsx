import { Empty, Select, Spin, Table } from 'antd'
import React, { useMemo, useState } from 'react'

import { StudentGrade } from '@/shared/types/dashboard'

import styles from '@/widgets/dashboard-layout/DashboardWidget.module.css'

interface StudentGradesTableProps {
  grades?: StudentGrade[]
  loading?: boolean
}

export const StudentGradesTable: React.FC<StudentGradesTableProps> = ({ grades = [], loading = false }) => {
  const [selectedCourse, setSelectedCourse] = useState('all')

  const courses = useMemo(() => Array.from(new Set(grades.map((g) => g.course_name))), [grades])

  const filteredGrades = selectedCourse === 'all' ? grades : grades.filter((g) => g.course_name === selectedCourse)

  return (
    <Spin spinning={loading} tip='Загрузка...'>
      <div>
        <div className={styles.header}>
          <h2 className={styles.dwTitle}>Оценки</h2>

          <Select
            value={selectedCourse}
            onChange={setSelectedCourse}
            className={styles.select}
            options={[
              {
                value: 'all',
                label: 'Все предметы',
              },

              ...courses.map((course) => ({
                value: course,
                label: course,
              })),
            ]}
          />
        </div>

        {filteredGrades.length === 0 ? (
          <Empty description='Нет оценок' />
        ) : (
          <Table
            className={styles.dashboardContainer}
            dataSource={filteredGrades.map((g) => ({
              key: g.id,
              course: g.course_name,
              score: g.score,
              comment: g.comment,
            }))}
            columns={[
              {
                title: 'Предмет',
                dataIndex: 'course',
                key: 'course',
              },
              {
                title: 'Оценка',
                dataIndex: 'score',
                key: 'score',
              },
              {
                title: 'Комментарий',
                dataIndex: 'comment',
                key: 'comment',
              },
            ]}
            pagination={false}
          />
        )}
      </div>
    </Spin>
  )
}

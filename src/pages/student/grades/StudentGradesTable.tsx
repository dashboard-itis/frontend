import { Table, Spin, Empty } from 'antd'
import React from 'react'

import { StudentGrade } from '@/shared/types/dashboard'
import styles from '@/widgets/dashboard-layout/DashboardWidget.module.css'

interface StudentGradesTableProps {
  grades?: StudentGrade[]
  loading?: boolean
}

export const StudentGradesTable: React.FC<StudentGradesTableProps> = ({ grades = [], loading = false }) => {
  return (
    <Spin spinning={loading} tip='Загрузка...'>
      <div>
        <h2 className={styles.dwTitle}>Оценки</h2>

        {grades.length === 0 ? (
          <Empty description='Нет оценок' />
        ) : (
          <Table
            className={styles.dashboardContainer}
            dataSource={grades.map((g) => ({
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

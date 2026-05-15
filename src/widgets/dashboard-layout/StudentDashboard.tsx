import { Table, Typography, Select, Spin, Empty } from 'antd'
import React from 'react'

import styles from './DashboardWidget.module.css'

import { RatingStudent, StudentGrade } from '@/shared/types/dashboard'
const { Text } = Typography

//TODO: пока все поля необязательные из за сырого бэка, потом исправить
interface StudentDashboardProps {
  ratings?: RatingStudent[]
  grades?: StudentGrade[]
  tab?: 'stats' | 'grades'
  onTabChange?: (tab: 'stats' | 'grades') => void
  course?: string | null
  onCourseChange?: (course: string | null) => void
  studentId?: number
  isAnonymous?: boolean
  loading?: boolean
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  ratings = [],
  grades = [],
  tab = 'stats',
  onTabChange = () => {},
  course = null,
  onCourseChange = () => {},
  studentId = 0,
  isAnonymous = false,
  loading = false,
}) => {
  const mappedRatings = ratings.map((r, idx) => ({
    key: r.student_id,
    rank: r.rank,
    name: isAnonymous && r.student_id !== studentId ? r.anonymized_id : r.full_name,
    score: r.average_score,
  }))

  // const courses = [...new Set(grades.map((g) => g.course_name))]

  return (
    <Spin spinning={loading} tip='Загрузка...'>
      <div>
        <h2 className={styles.dwTitle}>Студент</h2>

        {/* переключение */}
        <Select
          className={styles.customSelect}
          size='large'
          value={tab}
          onChange={(value) => onTabChange(value)}
          style={{ width: 200, marginBottom: 20 }}
          options={[
            { value: 'stats', label: 'Статистика' },
            { value: 'grades', label: 'Оценки' },
          ]}
        />

        {/* Рейтинг */}
        {tab === 'stats' && (
          <>
            {mappedRatings.length === 0 ? (
              <Empty description='Нет данных рейтинга' />
            ) : (
              <>
                <Table
                  className={styles.dashboardContainer}
                  dataSource={mappedRatings}
                  columns={[
                    { title: 'Место', dataIndex: 'rank', key: 'rank' },
                    { title: 'Студент', dataIndex: 'name', key: 'name' },
                    { title: 'Средний балл', dataIndex: 'score', key: 'score' },
                  ]}
                  pagination={false}
                />

                <Text type='secondary' style={{ display: 'block', marginTop: 16 }}>
                  {isAnonymous ? 'Остальные студенты скрыты' : 'Полный рейтинг группы'}
                </Text>
              </>
            )}
          </>
        )}

        {/* Оценки */}
        {tab === 'grades' && (
          <div>
            {/*<Title level={4}>Оценки</Title>*/}

            {/*<Select*/}
            {/*  value={course || ''}*/}
            {/*  onChange={(value) => onCourseChange(value || null)}*/}
            {/*  style={{ width: 200, marginBottom: 20 }}*/}
            {/*  placeholder='Выбери предмет'*/}
            {/*  options={[{ value: '', label: 'Все предметы' }, ...courses.map((c) => ({ value: c, label: c }))]}*/}
            {/*/>*/}

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
                  { title: 'Предмет', dataIndex: 'course', key: 'course' },
                  { title: 'Оценка', dataIndex: 'score', key: 'score' },
                  { title: 'Комментарий', dataIndex: 'comment', key: 'comment' },
                ]}
                pagination={false}
              />
            )}
          </div>
        )}
      </div>
    </Spin>
  )
}

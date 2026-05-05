import { Table, Typography, Select } from 'antd'
import React from 'react'

import { RatingStudent, StudentGrade } from '@/shared/types/dashboard'
const { Title, Text } = Typography

interface StudentDashboardProps {
  ratings: RatingStudent[]
  grades: StudentGrade[]
  tab: 'stats' | 'grades'
  onTabChange: (tab: 'stats' | 'grades') => void
  course: string | null
  onCourseChange: (course: string | null) => void
  studentId: number
  isAnonymous?: boolean
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  ratings,
  grades,
  tab,
  onTabChange,
  course,
  onCourseChange,
  studentId,
  isAnonymous = false,
}) => {
  const mappedRatings = ratings.map((r, idx) => ({
    key: r.student_id,
    rank: r.rank,
    name: isAnonymous && r.student_id !== studentId ? r.anonymized_id : r.full_name,
    score: r.average_score,
  }))

  // const courses = [...new Set(grades.map((g) => g.course_name))]

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <Title level={3}>Студент</Title>

      {/* переключение */}
      <Select
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
          <Title level={4}>Рейтинг</Title>

          <Table
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

      {/* Оценки */}
      {tab === 'grades' && (
        <>
          {/*<Title level={4}>Оценки</Title>*/}

          {/*<Select*/}
          {/*  value={course || ''}*/}
          {/*  onChange={(value) => onCourseChange(value || null)}*/}
          {/*  style={{ width: 200, marginBottom: 20 }}*/}
          {/*  placeholder='Выбери предмет'*/}
          {/*  options={[{ value: '', label: 'Все предметы' }, ...courses.map((c) => ({ value: c, label: c }))]}*/}
          {/*/>*/}

          <Table
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
        </>
      )}
    </div>
  )
}

import { Card } from 'antd'

import { StudentGrade } from '@/shared/types/dashboard'

interface Props {
  grades: StudentGrade[]
}

export const RecentGrades = ({ grades }: Props) => {
  return (
    <Card
      style={{
        borderRadius: 20,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        height: '100%',
      }}
    >
      <h2
        style={{
          marginBottom: 24,
        }}
      >
        Последние оценки
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {grades.map((grade) => (
          <div
            key={grade.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 12,
              borderRadius: 12,
              background: '#f5f7fb',
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 600,
                }}
              >
                {grade.course_name}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: '#888',
                }}
              >
                {grade.comment}
              </div>
            </div>

            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {grade.score}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

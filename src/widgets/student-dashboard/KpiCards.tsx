import { Card } from 'antd'

import { StudentAnalytics } from '@/shared/types/analytics'

const cardStyle = {
  borderRadius: 20,
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
}

const labelStyle = {
  color: '#8c8c8c',
  fontSize: 14,
  marginBottom: 12,
}

const valueStyle = {
  fontSize: 32,
  fontWeight: 700,
  margin: 0,
}

const subjectStyle = {
  fontSize: 20,
  fontWeight: 600,
  margin: 0,
}

interface Props {
  analytics: StudentAnalytics
}

export const KpiCards = ({ analytics }: Props) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
        marginBottom: 32,
      }}
    >
      <Card style={cardStyle}>
        <div>
          <p style={{ color: '#888', marginBottom: 8 }}>Средний балл</p>
          <h1 style={valueStyle}>{analytics.averageGrade}</h1>
        </div>
      </Card>

      <Card style={cardStyle}>
        <div>
          <p style={{ color: '#888', marginBottom: 8 }}>Лучший предмет</p>
          <h1 style={valueStyle}>{analytics.strongestSubject}</h1>
        </div>
      </Card>

      <Card style={cardStyle}>
        <div>
          <p style={{ color: '#888', marginBottom: 8 }}>Требует внимания</p>
          <h1 style={valueStyle}>{analytics.weakestSubject}</h1>
        </div>
      </Card>

      <Card style={cardStyle}>
        <div>
          <p style={{ color: '#888', marginBottom: 8 }}>Средний балл</p>
          <h1 style={valueStyle}>{analytics.progressTrend}</h1>
        </div>
      </Card>
    </div>
  )
}

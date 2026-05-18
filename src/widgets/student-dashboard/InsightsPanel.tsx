import { Card } from 'antd'

interface Props {
  insights: string[]
}

export const InsightsPanel = ({ insights }: Props) => {
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
        Краткая аналитика
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {insights.map((insight) => (
          <div
            key={insight}
            style={{
              padding: 16,
              borderRadius: 12,
              background: '#f5f7fb',
              lineHeight: 1.5,
              fontSize: 14,
            }}
          >
            {insight}
          </div>
        ))}
      </div>
    </Card>
  )
}

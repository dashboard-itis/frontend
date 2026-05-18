import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface Props {
  data: {
    subject: string
    average: number
  }[]
}

export const SubjectPerformanceChart = ({ data }: Props) => {
  return (
    <div
      style={{
        background: '#fff',
        padding: 24,
        borderRadius: 20,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <h2
        style={{
          marginBottom: 24,
        }}
      >
        Успеваемость по предметам
      </h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />

          <XAxis dataKey='subject' />
          <YAxis domain={[0, 50]} />

          <Tooltip />

          <Bar dataKey='average' radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

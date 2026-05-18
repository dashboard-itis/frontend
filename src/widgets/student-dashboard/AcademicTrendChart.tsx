import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface Props {
  data: {
    week: string
    average: number
  }[]
}

export const AcademicTrendChart = ({ data }: Props) => {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: 24,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <h2
        style={{
          marginBottom: 24,
        }}
      >
        Динамика успеваемости
      </h2>

      <ResponsiveContainer width='100%' height={320}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />

          <XAxis dataKey='week' />

          <YAxis domain={[0, 50]} />

          <Tooltip />

          <Area type='monotone' dataKey='average' stroke='#6366f1' fill='#c7d2fe' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

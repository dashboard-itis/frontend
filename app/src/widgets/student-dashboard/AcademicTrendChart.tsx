import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import styles from './AcademicTrendChart.module.css'

interface Props {
  data: {
    week: string
    average: number
  }[]
}

export const AcademicTrendChart = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Динамика успеваемости</h2>

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

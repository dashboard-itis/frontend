import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import styles from './SubjectPerformanceChart.module.css'

interface Props {
  data: {
    subject: string
    average: number
  }[]
}

export const SubjectPerformanceChart = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Успеваемость по предметам</h2>

      <ResponsiveContainer width='100%' height={420}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />

          <XAxis dataKey='subject' />

          <YAxis domain={[0, 50]} />

          <Tooltip />

          <Bar dataKey='average' fill='#4f6bff' radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import styles from './GradeDistributionChart.module.css'

import { GradeDistributionItem } from './models/builders/buildGradeDistribution'

interface Props {
  data: GradeDistributionItem[]
}

export const GradeDistributionChart = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Распределение оценок</h2>

      <ResponsiveContainer width='100%' height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />

          <XAxis dataKey='range' />

          <YAxis />

          <Tooltip />

          <Bar dataKey='count' fill='#4f6bff' radius={[10, 10, 0, 0]} barSize={54} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

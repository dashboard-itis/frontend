import { Tooltip } from 'antd'

import { HiOutlineInformationCircle } from 'react-icons/hi'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts'

import { WeakSubjectChartItem } from './models/builders/buildWeakSubjects'
import styles from './WeakSubjectsChart.module.css'

interface Props {
  data: WeakSubjectChartItem[]
}

const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#facc15', '#fb7185']

export const WeakSubjectsChart = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Проблемные дисциплины</h2>

        <Tooltip title='Показывает предметы с наибольшим количеством низких оценок (ниже 30 баллов).'>
          <span className={styles.info}>
            <HiOutlineInformationCircle />
          </span>
        </Tooltip>
      </div>

      <div className={styles.chart}>
        <ResponsiveContainer width='100%' height={320}>
          <PieChart>
            <Pie data={data} dataKey='value' nameKey='name' innerRadius={70} outerRadius={110} paddingAngle={4}>
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <RechartsTooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        {data.map((item, index) => (
          <div key={item.name} className={styles.legendItem}>
            <div className={styles.legendLeft}>
              <div
                className={styles.dot}
                style={{
                  background: COLORS[index % COLORS.length],
                }}
              />

              <span>{item.name}</span>
            </div>

            <span className={styles.value}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

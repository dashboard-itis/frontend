import { Card } from 'antd'

import styles from './InsightsPanel.module.css'

interface Props {
  insights: string[]
}

export const InsightsPanel = ({ insights }: Props) => {
  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>Краткая аналитика</h2>

      <div className={styles.list}>
        {insights.map((insight) => (
          <div key={insight} className={styles.item}>
            {insight}
          </div>
        ))}
      </div>
    </Card>
  )
}

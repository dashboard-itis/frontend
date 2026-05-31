import { Card, Tooltip } from 'antd'

import {
  HiOutlineChartBar,
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlineTrendingUp,
  HiOutlineUsers,
} from 'react-icons/hi'

import styles from './CuratorKpiCards.module.css'

import { CuratorAnalytics } from './models/builders/buildCuratorAnalytics'

interface Props {
  analytics: CuratorAnalytics
}

export const CuratorKpiCards = ({ analytics }: Props) => {
  return (
    <div className={styles.grid}>
      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <p className={styles.label}>Средний балл группы</p>

            <Tooltip title='Средний результат по всей группе'>
              <span className={styles.info}>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </div>

          <h1 className={styles.metric}>{analytics.averageGrade}</h1>

          <div className={`${styles.icon} ${styles.blue}`}>
            <HiOutlineChartBar />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <p className={styles.label}>Лучший предмет</p>

            <Tooltip title='Предмет с самым высоким средним результатом'>
              <span className={styles.info}>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </div>

          <h1 className={styles.metric}>{analytics.strongestSubject}</h1>

          <div className={`${styles.icon} ${styles.orange}`}>
            <HiOutlineUsers />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <p className={styles.label}>Студентов в зоне риска</p>

            <Tooltip title='Студенты со средним баллом ниже 30'>
              <span className={styles.info}>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </div>

          <h1 className={styles.metric}>{analytics.riskStudentsCount}</h1>

          <div className={`${styles.icon} ${styles.red}`}>
            <HiOutlineExclamation />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <p className={styles.label}>Динамика группы</p>

            <Tooltip title='Общая тенденция успеваемости группы'>
              <span className={styles.info}>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </div>

          <h1 className={styles.metric}>{analytics.progressTrend}</h1>

          <div className={`${styles.icon} ${styles.green}`}>
            <HiOutlineTrendingUp />
          </div>
        </div>
      </Card>
    </div>
  )
}

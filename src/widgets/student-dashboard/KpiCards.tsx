import { Card, Tooltip } from 'antd'
import { HiOutlineChartBar, HiOutlineExclamation, HiOutlineInformationCircle, HiOutlineStar } from 'react-icons/hi'

import { PiStudentBold } from 'react-icons/pi'

import styles from './KpiCards.module.css'

import { StudentAnalytics } from '@/shared/types/analytics'

interface Props {
  analytics: StudentAnalytics
}

export const KpiCards = ({ analytics }: Props) => {
  return (
    <div className={styles.grid}>
      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Средний балл</p>

              <Tooltip title='Средний результат по всем дисциплинам'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.averageGrade}</h1>

          <div className={`${styles.icon} ${styles.blue}`}>
            <HiOutlineChartBar />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Сильная сторона</p>

              <Tooltip title='Предмет с наиболее высоким средним баллом'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.strongestSubject}</h1>

          <div className={`${styles.icon} ${styles.orange}`}>
            <HiOutlineStar />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Зона внимания</p>

              <Tooltip title='Предмет с наиболее низкими результатами'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.weakestSubject}</h1>

          <div className={`${styles.icon} ${styles.red}`}>
            <HiOutlineExclamation />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Статус</p>

              <Tooltip title='Общая оценка текущей успеваемости'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.progressTrend}</h1>

          <div className={`${styles.icon} ${styles.green}`}>
            <PiStudentBold />
          </div>
        </div>
      </Card>
    </div>
  )
}

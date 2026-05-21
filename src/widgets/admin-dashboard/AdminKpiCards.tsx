import { Card, Tooltip } from 'antd'

import {
  HiOutlineChartBar,
  HiOutlineClipboardCheck,
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlineUsers,
} from 'react-icons/hi'

import { AdminAnalytics } from './model/builders/buildAdminAnalytics'

import styles from '@/widgets/student-dashboard/KpiCards.module.css'

interface Props {
  analytics: AdminAnalytics
}

export const KpiCards = ({ analytics }: Props) => {
  return (
    <div className={styles.grid}>
      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Групп под наблюдением</p>

              <Tooltip title='Количество групп в системе'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.groupsCount}</h1>

          <div className={`${styles.icon} ${styles.blue}`}>
            <HiOutlineUsers />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Проверено работ</p>

              <Tooltip title='Количество загруженных и проверенных оценок'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.checkedWorks}</h1>

          <div className={`${styles.icon} ${styles.orange}`}>
            <HiOutlineClipboardCheck />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Средний балл системы</p>

              <Tooltip title='Средний результат по всем дисциплинам'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.averageScore}</h1>

          <div className={`${styles.icon} ${styles.green}`}>
            <HiOutlineChartBar />
          </div>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.titleRow}>
              <p className={styles.label}>Студентов в зоне риска</p>

              <Tooltip title='Студенты с низкой средней успеваемостью'>
                <span className={styles.info}>
                  <HiOutlineInformationCircle />
                </span>
              </Tooltip>
            </div>
          </div>

          <h1 className={styles.metric}>{analytics.riskStudents}</h1>

          <div className={`${styles.icon} ${styles.red}`}>
            <HiOutlineExclamation />
          </div>
        </div>
      </Card>
    </div>
  )
}

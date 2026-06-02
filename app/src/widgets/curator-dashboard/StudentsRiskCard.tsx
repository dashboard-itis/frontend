import { Tag } from 'antd'

import { RiskStudent } from './models/builders/buildRiskStudents'

import styles from './StudentsRiskCard.module.css'

interface Props {
  students: RiskStudent[]
}

export const StudentsRiskCard = ({ students }: Props) => {
  const getRisk = (average: number) => {
    if (average < 20) {
      return {
        label: 'Выскоий риск',
        color: 'red',
      }
    }
    if (average < 30) {
      return {
        label: 'Средний риск',
        color: 'orange',
      }
    }
    return {
      label: 'Низкий риск',
      color: 'green',
    }
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Студенты в зоне риска</h2>

      <div className={styles.list}>
        {students.map((student) => {
          const risk = getRisk(student.average)
          return (
            <div key={student.id} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.avatar}>
                  {student.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div className={styles.name}>{student.name}</div>
              </div>

              <Tag color={risk.color}>{risk.label}</Tag>
            </div>
          )
        })}
      </div>
    </div>
  )
}

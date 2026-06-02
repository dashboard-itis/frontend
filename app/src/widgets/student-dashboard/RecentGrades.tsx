import { Card } from 'antd'

import styles from './RecentGrades.module.css'

import { StudentGrade } from '@/shared/types/dashboard'

interface Props {
  grades: StudentGrade[]
}

export const RecentGrades = ({ grades }: Props) => {
  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>Последние оценки</h2>

      <div className={styles.list}>
        {grades.map((grade) => (
          <div key={grade.id} className={styles.gradeItem}>
            <div>
              <div className={styles.course}>{grade.course_name}</div>

              <div className={styles.comment}>{grade.comment}</div>
            </div>

            <div className={styles.score}>{grade.score}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

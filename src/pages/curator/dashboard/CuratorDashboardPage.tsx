import { useEffect, useState } from 'react'

import styles from './CuratorDashboardPage.module.css'

import { getStudentGrades } from '@/shared/api/grades'
import { getRatings } from '@/shared/api/ratings'

import { StudentGrade } from '@/shared/types/dashboard'
import { CuratorKpiCards } from '@/widgets/curator-dashboard/CuratorKpiCards'
import { GradeDistributionChart } from '@/widgets/curator-dashboard/GradeDistributionChart'
import { buildCuratorAnalytics } from '@/widgets/curator-dashboard/models/builders/buildCuratorAnalytics'
import { buildGradeDistribution } from '@/widgets/curator-dashboard/models/builders/buildGradeDistribution'
import { buildGroupTrend } from '@/widgets/curator-dashboard/models/builders/buildGroupTrend'
import { buildRiskStudents } from '@/widgets/curator-dashboard/models/builders/buildRiskStudents'
import { buildWeakSubjectsChart } from '@/widgets/curator-dashboard/models/builders/buildWeakSubjects'
import { StudentsRiskCard } from '@/widgets/curator-dashboard/StudentsRiskCard'
import { WeakSubjectsChart } from '@/widgets/curator-dashboard/WeakSubjectsChart'
import { AcademicTrendChart } from '@/widgets/student-dashboard/AcademicTrendChart'

export const CuratorDashboardPage = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])

  // TODO: заменить на id группы куратора
  const groupId = 1

  useEffect(() => {
    const fetchGrades = async () => {
      const ratings = (await getRatings(groupId)) || []

      const allGrades = await Promise.all(
        ratings.map(async (student) => {
          const grades = await getStudentGrades(student.student_id)

          return grades.map((grade) => ({
            ...grade,
            student_id: student.student_id,
            student_name: student.full_name,
          }))
        }),
      )
      setGrades(allGrades.flat())
    }
    fetchGrades()
  }, [])

  const riskStudents = buildRiskStudents(grades)
  const distributionData = buildGradeDistribution(grades)
  const curatorAnalytics = buildCuratorAnalytics(grades)
  const groupTrendData = buildGroupTrend(grades)
  const weakSubjectsData = buildWeakSubjectsChart(grades)

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Дашборд куратора</h1>

      <CuratorKpiCards analytics={curatorAnalytics} />

      <div className={styles.row}>
        <div className={styles.large}>
          <GradeDistributionChart data={distributionData} />
        </div>

        <div className={styles.small}>
          <StudentsRiskCard students={riskStudents} />
        </div>
      </div>

      <div className={styles.rowReverse}>
        <div className={styles.small}>
          <WeakSubjectsChart data={weakSubjectsData} />
        </div>

        <div className={styles.large}>
          <AcademicTrendChart data={groupTrendData} />
        </div>
      </div>
    </div>
  )
}

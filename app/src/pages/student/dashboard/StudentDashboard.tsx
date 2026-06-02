import { Spin } from 'antd'
import { useEffect, useState } from 'react'

import styles from './StudentDashboard.module.css'

import { getStudentAnalytics } from '@/shared/api/analytics'

import { getCurrentUser } from '@/shared/api/auth'

import { getStudentGrades } from '@/shared/api/grades'

import { StudentGrade } from '@/shared/types/dashboard'

import { AcademicTrendChart } from '@/widgets/student-dashboard/AcademicTrendChart'
import { InsightsPanel } from '@/widgets/student-dashboard/InsightsPanel'
import { KpiCards } from '@/widgets/student-dashboard/KpiCards'
import { buildAcademicTrend } from '@/widgets/student-dashboard/model/builders/buildAcademicTrend'
import { buildInsights } from '@/widgets/student-dashboard/model/builders/buildInsight'
import { buildRecentGrades } from '@/widgets/student-dashboard/model/builders/buildRecentGrades'
import { buildStudentAnalytics } from '@/widgets/student-dashboard/model/builders/buildStudentAnalytics'
import { buildSubjectPerformance } from '@/widgets/student-dashboard/model/builders/buildSubjectPerformance'
import { RecentGrades } from '@/widgets/student-dashboard/RecentGrades'
import { SubjectPerformanceChart } from '@/widgets/student-dashboard/SubjectPerfomanceChart'

import type { TrendPoint } from '@/shared/api/api'

export const StudentDashboard = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])
  const [trend, setTrend] = useState<TrendPoint[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser()
        if (currentUser.id == null) return

        const [gradesData, analyticsData] = await Promise.all([
          getStudentGrades(currentUser.id),
          getStudentAnalytics(currentUser.id).catch(() => null),
        ])

        setGrades(gradesData)
        if (analyticsData?.trend) {
          setTrend(analyticsData.trend)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const analytics = buildStudentAnalytics(grades)
  const performanceData = buildSubjectPerformance(grades)
  const trendData = buildAcademicTrend(trend)
  const insights = buildInsights(analytics)
  const recentGrades = buildRecentGrades(grades)

  if (loading) {
    return <Spin style={{ display: 'block', margin: '80px auto' }} />
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Дашборд студента</h1>

      <KpiCards analytics={analytics} />

      <div className={styles.row}>
        <div className={styles.large}>
          <AcademicTrendChart data={trendData} />
        </div>

        <div className={styles.small}>
          <InsightsPanel insights={insights} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.small}>
          <RecentGrades grades={recentGrades} />
        </div>

        <div className={styles.large}>
          <SubjectPerformanceChart data={performanceData} />
        </div>
      </div>
    </div>
  )
}

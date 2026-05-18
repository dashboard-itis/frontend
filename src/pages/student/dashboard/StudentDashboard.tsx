import { useEffect, useState } from 'react'

import { getStudentGrades } from '@/shared/api/grades'

import { StudentGrade } from '@/shared/types/dashboard'

import { AcademicTrendChart } from '@/widgets/student-dashboard/AcademicTrendChart'
import { buildAcademicTrend } from '@/widgets/student-dashboard/buildAcademicTrend'
import { buildInsights } from '@/widgets/student-dashboard/buildInsight'
import { buildRecentGrades } from '@/widgets/student-dashboard/buildRecentGrades'
import { buildStudentAnalytics } from '@/widgets/student-dashboard/buildStudentAnalytics'
import { buildSubjectPerfomance } from '@/widgets/student-dashboard/buildSubjectPerfomance'
import { InsightsPanel } from '@/widgets/student-dashboard/InsightsPanel'
import { KpiCards } from '@/widgets/student-dashboard/KpiCards'
import { RecentGrades } from '@/widgets/student-dashboard/RecentGrades'
import { SubjectPerformanceChart } from '@/widgets/student-dashboard/SubjectPerfomanceChart'

export const StudentDashboard = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])

  // TODO: заменить на id из auth
  const studentId = 1

  useEffect(() => {
    const fetchGrades = async () => {
      const data = await getStudentGrades(studentId)

      setGrades(data)
    }

    fetchGrades()
  }, [])

  const analytics = buildStudentAnalytics(grades)
  const performanceData = buildSubjectPerfomance(grades)
  const trendData = buildAcademicTrend()
  const insights = buildInsights(analytics)
  const recentGrades = buildRecentGrades(grades)

  return (
    <div
      style={{
        flex: 1,
        background: '#f5f7fb',
        minHeight: '100vh',
        padding: 32,
      }}
    >
      <h1
        style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 32,
        }}
      >
        Дашборд студента
      </h1>

      <KpiCards analytics={analytics} />
      <SubjectPerformanceChart data={performanceData} />
      <AcademicTrendChart data={trendData} />
      <InsightsPanel insights={insights} />
      <RecentGrades grades={recentGrades} />
    </div>
  )
}

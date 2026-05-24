import { Select } from 'antd'
import { useEffect, useState } from 'react'

import styles from './AdminDashboardPage.module.css'

import { getGroupAnalytics } from '@/shared/api/analytics'
import { GroupPublic, UserPublic } from '@/shared/api/api'

import { getStudentGrades } from '@/shared/api/grades'
import { getGroups } from '@/shared/api/groups'
import { getUsers } from '@/shared/api/users'
import { hasUserRole } from '@/shared/lib/roles'

import { StudentGrade } from '@/shared/types/dashboard'

import { KpiCards } from '@/widgets/admin-dashboard/AdminKpiCards'
import { buildAdminAnalytics } from '@/widgets/admin-dashboard/model/builders/buildAdminAnalytics'
import { AcademicTrendChart } from '@/widgets/student-dashboard/AcademicTrendChart'

export const AdminDashboardPage = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])

  const [groups, setGroups] = useState<GroupPublic[]>([])

  const [selectedGroup, setSelectedGroup] = useState('none')
  const [trendData, setTrendData] = useState<
    {
      week: string
      average: number
    }[]
  >([])

  useEffect(() => {
    const fetchData = async () => {
      const [groupsData, usersData] = await Promise.all([getGroups(), getUsers()])

      setGroups(groupsData)

      const allGrades = await Promise.all(
        usersData
          .filter((user): user is UserPublic & { id: number } => hasUserRole(user, 'STUDENT') && user.id != null)
          .map((student) => getStudentGrades(student.id)),
      )

      setGrades(allGrades.flat())
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchTrend = async () => {
      if (selectedGroup === 'none') return

      const analytics = await getGroupAnalytics(Number(selectedGroup))

      const formatted = analytics.trend.map((item) => ({
        week: item.period,

        average: item.average_score,
      }))

      setTrendData(formatted)
    }

    fetchTrend()
  }, [selectedGroup])
  const groupOptions = [
    {
      value: 'none',
      label: 'Не выбрано',
    },
    ...groups
      .filter((group) => group.id != null)
      .map((group) => ({
        value: String(group.id),
        label: group.name,
      })),
  ]

  const analytics = buildAdminAnalytics(grades, groups)

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Дашборд преподавателя</h1>

      <KpiCards analytics={analytics} />

      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <Select className={styles.select} value={selectedGroup} onChange={setSelectedGroup} options={groupOptions} />
        </div>

        <AcademicTrendChart data={trendData} />
      </div>
    </div>
  )
}

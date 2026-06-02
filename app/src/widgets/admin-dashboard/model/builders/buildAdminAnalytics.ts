import { GroupPublic } from '@/shared/api/api'
import { StudentGrade } from '@/shared/types/dashboard'

export interface AdminAnalytics {
  groupsCount: number
  checkedWorks: number
  averageScore: number
  riskStudents: number
}

export const buildAdminAnalytics = (grades: StudentGrade[], groups: GroupPublic[]): AdminAnalytics => {
  const averageScore =
    grades.length > 0 ? Math.round(grades.reduce((sum, grade) => sum + grade.score, 0) / grades.length) : 0

  const checkedWorks = grades.length

  const studentScores = grades.reduce<Record<number, number[]>>((acc, grade) => {
    acc[grade.student_id] = [...(acc[grade.student_id] || []), grade.score]

    return acc
  }, {})

  const riskStudents = Object.values(studentScores).filter((scores) => {
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length

    return average < 30
  }).length

  return {
    groupsCount: groups.length,
    checkedWorks,
    averageScore,
    riskStudents,
  }
}

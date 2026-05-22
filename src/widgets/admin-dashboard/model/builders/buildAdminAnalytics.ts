import { GroupPublic } from '@/shared/api/api'
import { RatingStudent, StudentGrade } from '@/shared/types/dashboard'

export interface AdminAnalytics {
  groupsCount: number
  checkedWorks: number
  averageScore: number
  riskStudents: number
}

export const buildAdminAnalytics = (
  grades: StudentGrade[],
  ratings: RatingStudent[],
  groups: GroupPublic[],
): AdminAnalytics => {
  const averageScore =
    grades.length > 0 ? Math.round(grades.reduce((sum, grade) => sum + grade.score, 0) / grades.length) : 0

  const checkedWorks = grades.length

  const riskStudents = ratings.filter((student) => student.average_score < 3).length

  return {
    groupsCount: groups.length,
    checkedWorks,
    averageScore,
    riskStudents,
  }
}

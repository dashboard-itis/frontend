import { StudentGrade } from '@/shared/types/dashboard'

interface GroupTrendItem {
  week: string
  average: number
}

export const buildGroupTrend = (grades: StudentGrade[]): GroupTrendItem[] => {
  const grouped = new Map<string, number[]>()

  grades.forEach((grade) => {
    if (!grade.created_at) {
      return
    }

    const date = new Date(grade.created_at)

    const day = String(date.getDate()).padStart(2, '0')

    const month = String(date.getMonth() + 1).padStart(2, '0')

    const weekLabel = `${day}.${month}`

    const current = grouped.get(weekLabel) || []

    current.push(grade.score)

    grouped.set(weekLabel, current)
  })

  return Array.from(grouped.entries()).map(([week, scores]) => ({
    week,

    average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
  }))
}

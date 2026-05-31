import { StudentGrade } from '@/shared/types/dashboard'

export interface WeakSubjectChartItem {
  name: string
  value: number
}

export const buildWeakSubjectsChart = (grades: StudentGrade[]): WeakSubjectChartItem[] => {
  const subjectsMap = new Map<string, number>()

  grades.forEach((grade) => {
    if (grade.score >= 30) {
      return
    }

    const subject = grade.course_name || 'Неизвестно'

    const current = subjectsMap.get(subject) || 0

    subjectsMap.set(subject, current + 1)
  })

  return Array.from(subjectsMap.entries()).map(([name, value]) => ({
    name,
    value,
  }))
}

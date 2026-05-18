import { StudentGrade } from '@/shared/types/dashboard'

export const buildSubjectPerfomance = (grades: StudentGrade[]) => {
  const subjectsMap = new Map<string, number[]>()

  grades.forEach((g) => {
    const subject = g.course_name || 'Неизвестный предмет'

    const current = subjectsMap.get(subject) || []

    current.push(g.score)

    subjectsMap.set(subject, current)
  })

  const array = Array.from(subjectsMap.entries()).map(([subject, scores]) => ({
    subject,
    average: scores.reduce((a, b) => a + b, 0) / scores.length,
  }))

  return array
}

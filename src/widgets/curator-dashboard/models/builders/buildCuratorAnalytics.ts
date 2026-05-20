import { StudentGrade } from '@/shared/types/dashboard'

export interface CuratorAnalytics {
  averageGrade: number
  riskStudentsCount: number
  strongestSubject: string
  progressTrend: string
}

export const buildCuratorAnalytics = (grades: StudentGrade[]): CuratorAnalytics => {
  if (!grades.length) {
    return {
      averageGrade: 0,
      riskStudentsCount: 0,
      strongestSubject: '-',
      progressTrend: '-',
    }
  }

  const averageGrade = grades.reduce((acc, grade) => acc + grade.score, 0) / grades.length

  const studentMap = new Map<number, number[]>()
  grades.forEach((grade) => {
    const current = studentMap.get(grade.student_id) || []

    current.push(grade.score)
    studentMap.set(grade.student_id, current)
  })

  const riskStudentsCount = Array.from(studentMap.values()).filter((scores) => {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length
    return avg < 30
  }).length

  const subjectMap = new Map<string, number[]>()
  grades.forEach((grade) => {
    const subject = grade.course_name || 'Неизвестный предмет'

    const current = subjectMap.get(subject) || []

    current.push(grade.score)
    subjectMap.set(subject, current)
  })

  const strongestSubject =
    Array.from(subjectMap.entries())
      .map(([subject, scores]) => ({
        subject,
        average: scores.reduce((a, b) => a + b, 0) / scores.length,
      }))
      .sort((a, b) => b.average - a.average)[0]?.subject || '-'

  let progressTrend = 'Стабильно'

  if (averageGrade >= 40) {
    progressTrend = 'Рост'
  }

  if (averageGrade < 30) {
    progressTrend = 'Снижение'
  }

  return {
    averageGrade: Number(averageGrade.toFixed(1)),

    riskStudentsCount,

    strongestSubject,

    progressTrend,
  }
}

import { StudentAnalytics } from '@/shared/types/analytics'
import { StudentGrade } from '@/shared/types/dashboard'

export const buildStudentAnalytics = (grades: StudentGrade[]): StudentAnalytics => {
  if (!grades.length) {
    return {
      averageGrade: 0,
      progressTrend: '-',
      strongestSubject: '-',
      weakestSubject: '-',
    }
  }

  const averageGrade = grades.reduce((acc, g) => acc + g.score, 0) / grades.length

  const subjectsMap = new Map<string, number[]>()
  grades.forEach((g) => {
    const subject = g.course_name || 'Неизвестный предмет'
    const current = subjectsMap.get(subject) || []
    current.push(g.score)
    subjectsMap.set(subject, current)
  })

  const subjectAverages = Array.from(subjectsMap.entries()).map(([subject, scores]) => ({
    subject,
    average: scores.reduce((a, b) => a + b, 0) / scores.length,
  }))

  const strongestSubject = [...subjectAverages].sort((a, b) => b.average - a.average)[0]?.subject || '-'

  const weakestSubject = [...subjectAverages].sort((a, b) => a.average - b.average)[0]?.subject || '-'

  //TODO: добавить настоящую динамику
  let progressTrend = 'Стабильно'

  if (averageGrade >= 40) {
    progressTrend = 'Улучшение'
  }

  if (averageGrade < 30) {
    progressTrend = 'Снижение'
  }

  return {
    averageGrade: Number(averageGrade.toFixed(1)),
    strongestSubject,
    weakestSubject,
    progressTrend,
  }
}

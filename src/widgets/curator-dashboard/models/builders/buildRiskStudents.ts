import { StudentGrade } from '@/shared/types/dashboard'

export interface RiskStudent {
  id: number
  name: string
  average: number
}

export const buildRiskStudents = (grades: StudentGrade[]): RiskStudent[] => {
  const studentsMap = new Map<
    number,
    {
      name: string
      scores: number[]
    }
  >()

  grades.forEach((grade) => {
    const studentId = grade.student_id || 0
    const studentName = grade.student_name || 'Неизвестный студент'
    const current = studentsMap.get(studentId) || {
      name: studentName,
      scores: [],
    }

    current.scores.push(grade.score)
    studentsMap.set(studentId, current)
  })

  return Array.from(studentsMap.entries())
    .map(([id, data]) => ({
      id,
      name: data.name,
      average: data.scores.reduce((a, b) => a + b, 0) / data.scores.length,
    }))
    .sort((a, b) => a.average - b.average)
    .slice(0, 10)
}

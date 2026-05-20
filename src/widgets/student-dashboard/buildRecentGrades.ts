import { StudentGrade } from '@/shared/types/dashboard'
//TODO: добавить даты после бэка
export const buildRecentGrades = (grades: StudentGrade[]) => {
  return grades.slice(0, 5)
}

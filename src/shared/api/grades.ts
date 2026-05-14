import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { studentGrades } from '../mocks/grades'

import type { StudentGrade } from '@/shared/types/dashboard'

export const getStudentGrades = async (studentId: number): Promise<StudentGrade[]> => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) {
    return studentGrades.filter((grade) => grade.student_id === studentId)
  }

  const res = await api.api.getStudentGradesApiV1StudentsStudentIdGradesGet(studentId)

  return res.data.items
}

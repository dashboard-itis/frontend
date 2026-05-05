import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { studentGrades } from '../mocks/grades'

type GradesParams = {
  course_id?: number
  semester?: 'SPRING' | 'FALL'
  page?: number
  page_size?: number
}

export const getStudentGrades = async (studentId: number, params?: GradesParams) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) {
    return studentGrades.filter((g) => g.student_id === studentId)
  }

  const res = await api.students.gradesList(studentId, params)

  return res.data.results
}

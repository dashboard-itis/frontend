import { api } from './client'

import type { GradeCreate, GradePublic, GradeUpdate, StudentGradeResponse } from './api'

export const getGrades = async (): Promise<StudentGradeResponse[]> => {
  const res = await api.api.getGradesApiV1GradesGet()

  return res.data.items
}

export const getStudentGrades = async (studentId: number): Promise<StudentGradeResponse[]> => {
  const res = await api.api.getStudentGradesApiV1StudentsStudentIdGradesGet(studentId)

  return res.data.items
}

export const getStudentGradeById = async (gradeId: number): Promise<StudentGradeResponse> => {
  const res = await api.api.getGradeApiV1GradesGradeIdGet(gradeId)

  return res.data
}

export const createStudentGrade = async (data: GradeCreate): Promise<GradePublic> => {
  const res = await api.api.createGradeApiV1GradesPost(data)

  return res.data
}

export const updateStudentGrade = async (gradeId: number, data: GradeUpdate): Promise<GradePublic> => {
  const res = await api.api.updateGradeApiV1GradesGradeIdPut(gradeId, data)

  return res.data
}

export const deleteStudentGrade = async (gradeId: number): Promise<void> => {
  await api.api.deleteGradeApiV1GradesGradeIdDelete(gradeId)
}

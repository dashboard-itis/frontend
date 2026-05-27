import { api } from './client'

import type { CourseCreate, CoursePublic, CourseUpdate } from './api'

export const getCourses = async (): Promise<CoursePublic[]> => {
  const res = await api.api.getCoursesApiV1CoursesGet()

  return res.data.items
}

export const getCourseById = async (courseId: number): Promise<CoursePublic> => {
  const res = await api.api.getCourseApiV1CoursesCourseIdGet(courseId)

  return res.data
}

export const createCourse = async (data: CourseCreate): Promise<CoursePublic> => {
  const res = await api.api.createCourseApiV1CoursesPost(data)

  return res.data
}

export const updateCourse = async (courseId: number, data: CourseUpdate): Promise<CoursePublic> => {
  const res = await api.api.updateCourseApiV1CoursesCourseIdPut(courseId, data)

  return res.data
}

export const deleteCourse = async (courseId: number): Promise<void> => {
  await api.api.deleteCourseApiV1CoursesCourseIdDelete(courseId)
}

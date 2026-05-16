import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { courses as coursesMock } from '../mocks/courses'

export const getCourses = async (streamId?: number) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return coursesMock

  const res = await api.api.getCoursesApiV1CoursesGet({
    stream_id: streamId,
  })

  return res.data.items
}

export const getCourseById = async (courseId: number) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return coursesMock.find((course) => course.id === courseId)

  const res = await api.api.getCourseApiV1CoursesCourseIdGet(courseId)

  return res.data
}

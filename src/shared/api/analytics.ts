import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { groupAnalytics, studentAnalytics } from '../mocks/analytics'

type AnalyticsParams = {
  semester?: 'SPRING' | 'FALL'
  year?: number
}

export const getGroupAnalytics = async (groupId: number, params?: AnalyticsParams) => {
  if (USE_MOCKS) return groupAnalytics

  const res = await api.groups.analyticsList(groupId, params)

  return res.data
}

export const getStudentAnalytics = async (studentId: number, params?: AnalyticsParams) => {
  if (USE_MOCKS) return studentAnalytics

  const res = await api.students.analyticsList(studentId, params)

  return res.data
}

import { api } from './client'

export const getGroupAnalytics = async (groupId: number) => {
  const res = await api.api.getGroupAnalyticsApiV1GroupsGroupIdAnalyticsGet(groupId, { trend_period: 'month' })

  return res.data
}

export const getStudentAnalytics = async (studentId: number) => {
  const res = await api.api.getStudentAnalyticsApiV1StudentsStudentIdAnalyticsGet(studentId, { trend_period: 'month' })

  return res.data
}

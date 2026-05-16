import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { groupAnalytics } from '../mocks/analytics'

export const getGroupAnalytics = async (groupId: number) => {
  if (USE_MOCKS) return groupAnalytics

  const res = await api.api.getGroupAnalyticsApiV1GroupsGroupIdAnalyticsGet(groupId)

  return res.data
}

//TODO: пока нет в бэке, не удаляю чтобы не забыть добавить и легче поменять на рабочий вариант
// export const getStudentAnalytics = async (studentId: number, params?: AnalyticsParams) => {
//   if (USE_MOCKS) return studentAnalytics

//   const res = await api.students.analyticsList(studentId, params)

//   return res.data
// }

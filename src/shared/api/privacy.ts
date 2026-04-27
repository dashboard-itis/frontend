import { UpdatePrivacyPolicyRequest } from './api'

import { api } from './client'

import { USE_MOCKS } from '../config/config'
import { privacyPolicyMock } from '../mocks/privacy'

export const getPrivacyPolicy = async (groupId: number) => {
  if (USE_MOCKS) return privacyPolicyMock

  const res = await api.groups.privacyPolicyList(groupId)

  return res.data
}

export const updatePrivacyPolicy = async (groupId: number, data: UpdatePrivacyPolicyRequest) => {
  if (USE_MOCKS) return true

  return api.groups.privacyPolicyUpdate(groupId, data)
}

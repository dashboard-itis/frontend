import { CreateGroupRequest, UpdateGroupRequest } from './api'
import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { groups as groupsMock } from '../mocks/groups'

export const getGroups = async () => {
  if (USE_MOCKS) return groupsMock

  const res = await api.groups.groupsList()

  return res.data.results
}

export const getGroupById = async (groupId: number) => {
  if (USE_MOCKS) return groupsMock.find((group) => group.id === groupId)

  const res = await api.groups.groupsDetail(groupId)

  return res.data
}

export const createGroup = async (data: CreateGroupRequest) => {
  if (USE_MOCKS) return true

  return api.groups.groupsCreate(data)
}

export const updateGroup = async (groupId: number, data: UpdateGroupRequest) => {
  if (USE_MOCKS) return true

  return api.groups.groupsUpdate(groupId, data)
}

export const deleteGroup = async (groupId: number) => {
  if (USE_MOCKS) return true

  return api.groups.groupsDelete(groupId)
}

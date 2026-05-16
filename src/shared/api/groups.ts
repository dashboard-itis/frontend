import { GroupCreate, GroupUpdate } from './api'

import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { groups as groupsMock } from '../mocks/groups'

export const getGroups = async () => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return groupsMock

  const res = await api.api.getGroupsApiV1GroupsGet()

  return res.data.items
}

export const getGroupById = async (groupId: number) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return groupsMock.find((group) => group.id === groupId)

  const res = await api.api.getGroupApiV1GroupsGroupIdGet(groupId)

  return res.data
}

export const createGroup = async (data: GroupCreate) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return true

  const res = await api.api.createGroupApiV1GroupsPost(data)

  return res.data
}

export const updateGroup = async (groupId: number, data: GroupUpdate) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return true

  const res = await api.api.updateGroupApiV1GroupsGroupIdPut(groupId, data)

  return res.data
}

export const deleteGroup = async (groupId: number) => {
  await api.api.deleteGroupApiV1GroupsGroupIdDelete(groupId)
}

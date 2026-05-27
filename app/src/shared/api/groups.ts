import { GroupCreate, GroupUpdate } from './api'

import { api } from './client'

export const getGroups = async () => {
  const res = await api.api.getGroupsApiV1GroupsGet()

  return res.data.items
}

export const getGroupById = async (groupId: number) => {
  const res = await api.api.getGroupApiV1GroupsGroupIdGet(groupId)

  return res.data
}

export const createGroup = async (data: GroupCreate) => {
  const res = await api.api.createGroupApiV1GroupsPost(data)

  return res.data
}

export const updateGroup = async (groupId: number, data: GroupUpdate) => {
  const res = await api.api.updateGroupApiV1GroupsGroupIdPut(groupId, data)

  return res.data
}

export const deleteGroup = async (groupId: number) => {
  await api.api.deleteGroupApiV1GroupsGroupIdDelete(groupId)
}

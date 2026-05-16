import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { users as usersMock } from '../mocks/users'

import type { UserCreate, UserUpdate, UserPublic } from './api'

export const getUsers = async (): Promise<UserPublic[]> => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return usersMock

  const res = await api.api.getUsersApiV1UsersGet()

  return res.data.items
}

export const getUserById = async (id: number): Promise<UserPublic | undefined> => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) {
    return usersMock.find((user) => user.id === id)
  }

  const res = await api.api.getUserApiV1UsersUserIdGet(id)

  return res.data
}

export const createUser = async (data: UserCreate) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return true

  const res = await api.api.createUserApiV1UsersPost(data)

  return res.data
}

export const deleteUser = async (id: number) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return true

  await api.api.deleteUserApiV1UsersUserIdDelete(id)
}

export const updateUser = async (id: number, data: UserUpdate) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return true

  const res = await api.api.updateUserApiV1UsersUserIdPut(id, data)

  return res.data
}

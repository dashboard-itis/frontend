import { api } from './client'

import type { UserCreate, UserUpdate, UserPublic } from './api'

export const getUsers = async (): Promise<UserPublic[]> => {
  const res = await api.api.getUsersApiV1UsersGet()

  return res.data.items
}

export const getUserById = async (id: number): Promise<UserPublic | undefined> => {
  const res = await api.api.getUserApiV1UsersUserIdGet(id)

  return res.data
}

export const createUser = async (data: UserCreate) => {
  const res = await api.api.createUserApiV1UsersPost(data)

  return res.data
}

export const deleteUser = async (id: number) => {
  await api.api.deleteUserApiV1UsersUserIdDelete(id)
}

export const updateUser = async (id: number, data: UserUpdate) => {
  const res = await api.api.updateUserApiV1UsersUserIdPut(id, data)

  return res.data
}

export const updateUserRoles = async (id: number, roles: string[]) => {
  const res = await api.api.updateUserRolesApiV1UsersUserIdRolesPut(id, { roles })

  return res.data
}

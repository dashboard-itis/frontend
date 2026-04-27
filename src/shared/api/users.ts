import { UpdateUserRequest, CreateUserRequest } from './api'
import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { users as usersMock } from '../mocks/users'

export const getUsers = async () => {
  if (USE_MOCKS) return usersMock

  const res = await api.users.usersList()
  return res.data.results
}

export const getUserById = async (id: number) => {
  if (USE_MOCKS) {
    return usersMock.find((user) => user.id === id)
  }

  const res = await api.users.usersDetail(id)

  return res.data
}
export const createUser = async (data: CreateUserRequest) => {
  if (USE_MOCKS) return true

  return api.users.usersCreate(data)
}

export const deleteUser = async (id: number) => {
  if (USE_MOCKS) return true

  await api.users.usersDelete(id)
}

export const updateUser = async (id: number, data: UpdateUserRequest) => {
  if (USE_MOCKS) return true

  return api.users.usersUpdate(id, data)
}

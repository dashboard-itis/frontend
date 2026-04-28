import { api } from './client'

import { USE_MOCKS } from '../config/config'

import { ratings as ratingsMock } from '../mocks/ratings'

type RatingParams = {
  semester?: 'SPRING' | 'FALL'
  year?: number
  course_id?: number
}

export const getRatings = async (groupId: number, params?: RatingParams) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return ratingsMock

  const res = await api.groups.ratingsList(groupId, params)

  return res.data.ratings || []
}

//TODO: пока эндпоинтов нет в бэке, потом меняем также на анастоящие
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
}

import { getUsers } from './users'

import { hasUserRole } from '../lib/roles'

type RatingParams = {
  semester?: 'SPRING' | 'FALL'
  year?: number
  course_id?: number
}

export const getRatings = async (groupId: number, _params?: RatingParams) => {
  const users = await getUsers()

  return users
    .filter((user) => user.id != null && hasUserRole(user, 'STUDENT') && user.group_id === groupId)
    .map((user, index) => ({
      student_id: user.id!,
      rank: index + 1,
      average_score: 0,
      full_name: `${user.first_name} ${user.last_name}`,
      anonymized_id: `STU-${String(index + 1).padStart(3, '0')}`,
    }))
}

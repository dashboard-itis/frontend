import type { UserPublic } from '@/shared/api/api'
import type { Role } from '@/shared/types/role'

export const hasUserRole = (user: UserPublic, role: Role) => {
  return user.roles?.some((userRole) => userRole.toUpperCase() === role) ?? false
}

//бэк отдает roles: string[], а местами ui ожидает одиночный role поэтому делаем такой хелпер
export const getPrimaryUserRole = (user: UserPublic): Role | undefined => {
  if (hasUserRole(user, 'ADMIN')) return 'ADMIN'
  if (hasUserRole(user, 'CURATOR')) return 'CURATOR'
  if (hasUserRole(user, 'STUDENT')) return 'STUDENT'

  return undefined
}

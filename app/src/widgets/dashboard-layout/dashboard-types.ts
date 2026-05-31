export type UserRole = 'student' | 'curator' | 'admin'
export type CuratorTab = 'dynamics' | 'distribution'
export type AdminTab = 'users' | 'import'

export interface DashboardWidgetProps {
  role: UserRole
  curatorTab?: CuratorTab
  adminTab?: AdminTab
  isAnonymous?: boolean
}

export const MOCK_STATS = {
  averageGroupGrade: 4.2,
  totalStudents: 30,
  distribution: {
    '5': 8,
    '4': 12,
    '3': 7,
    '2': 3,
  },
  dynamics: '+0.3 за период',
  studentRank: 5,
  studentAverage: 4.5,
  students: [
    { name: 'Иванов Иван', math: 5, prog: 4, physics: 4 },
    { name: 'Петров Петр', math: 4, prog: 5, physics: 3 },
    { name: 'Сидорова Анна', math: 5, prog: 5, physics: 5 },
  ],
  disciplines: ['Линейная алгебра', 'ОРИС', 'Фронтенд'],
  users: [
    {
      surname: 'Гильманов',
      name: 'Дамир',
      patronymic: 'Ришатович',
      group: '11-404',
      email: 'damir.gilza21@mail.ru',
      access: 'Анонимный',
      role: 'Студент',
    },
    {
      surname: 'Сидорина',
      name: 'Арина',
      patronymic: 'Аркадьевна',
      group: '11-411',
      email: 'arinaluchshaya@mail.ru',
      access: 'Общий',
      role: 'Куратор',
    },
    {
      surname: 'Шарапова',
      name: 'Диана',
      patronymic: 'Рустамовна',
      group: '11-411',
      email: 'diana.sharapova@mail.ru',
      access: 'Общий',
      role: 'Админ',
    },
  ],
}

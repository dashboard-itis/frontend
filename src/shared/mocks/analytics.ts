export const groupAnalytics = {
  group_id: 1,
  average_score: 4.3,
  submission_rate: 0.92,
  attendance_rate: 0.88,

  distribution: {
    5: 10,
    4: 12,
    3: 5,
    2: 1,
  },

  //TODO: сказать бэкам что нужно добавить для графика динамики
  trend: [
    { period: '1 семестр', average_score: 4.1 },
    { period: '2 семестр', average_score: 4.3 },
    { period: '3 семестр', average_score: 4.7 },
  ],
}

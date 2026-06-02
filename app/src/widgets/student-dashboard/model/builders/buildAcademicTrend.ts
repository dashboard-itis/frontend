import type { TrendPoint } from '@/shared/api/api'

export const buildAcademicTrend = (trend: TrendPoint[] = []) => {
  return trend.map((point) => ({
    week: point.period,
    average: point.average_score,
  }))
}

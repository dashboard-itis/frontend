import { StudentAnalytics } from '@/shared/types/analytics'

export const buildInsights = (analytics: StudentAnalytics) => {
  const insights: string[] = []

  if (analytics.averageGrade >= 40) {
    insights.push('Продолжайте поддерживать текущий уровень подготовки')
  } else {
    insights.push('Регулярная работа поможет улучшить результаты')
  }

  if (analytics.averageGrade >= 40) {
    insights.push('Отличные результаты по большинству дисциплин')
  } else if (analytics.averageGrade >= 30) {
    insights.push('Успеваемость остается стабильной')
  } else {
    insights.push('Некоторые дисциплины требуют дополнительного внимания')
  }

  if (
    analytics.strongestSubject !== '-' &&
    analytics.weakestSubject !== '-' &&
    analytics.strongestSubject !== analytics.weakestSubject
  ) {
    insights.push(`Наиболее высокие результаты наблюдаются по предмету "${analytics.strongestSubject}"`)

    insights.push(`Стоит уделить внимание предмету "${analytics.weakestSubject}"`)
  }

  if (analytics.progressTrend === 'Улучшение') {
    insights.push('Наблюдается положительная динамика успеваемости')
  }

  return insights
}

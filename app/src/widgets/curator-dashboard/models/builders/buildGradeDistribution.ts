import { StudentGrade } from '@/shared/types/dashboard'

export interface GradeDistributionItem {
  range: string
  count: number
}

export const buildGradeDistribution = (grades: StudentGrade[]): GradeDistributionItem[] => {
  const ranges = [
    {
      label: '0-20',
      min: 0,
      max: 20,
    },
    {
      label: '21-30',
      min: 21,
      max: 30,
    },
    {
      label: '31-40',
      min: 31,
      max: 40,
    },
    {
      label: '41-50',
      min: 41,
      max: 50,
    },
  ]

  return ranges.map((range) => ({
    range: range.label,

    count: grades.filter((grade) => grade.score >= range.min && grade.score <= range.max).length,
  }))
}

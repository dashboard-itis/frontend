export interface RatingStudent {
  student_id: number
  rank: number
  average_score: number
  full_name: string
  anonymized_id: string
}

export interface StudentGrade {
  id: number
  student_id: number
  student_name?: string
  course_id: number
  score: number
  comment?: string | null
  created_at: string
  course_name?: string | null
}

export interface TableRow {
  key: number
  rank: number
  fullName: string
  averageScore: number
  [key: string]: string | number
}

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
  assignment_id: number
  score: number
  comment?: string | null
  created_at: string
  //TODO: после добавления бэками этого поля сделать его обязательным
  course_name?: string | null
  assignment_title?: string | null
}

export interface TableRow {
  key: number
  rank: number
  fullName: string
  averageScore: number
  [key: string]: string | number
}

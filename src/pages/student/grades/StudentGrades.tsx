import React, { useEffect, useState } from 'react'

import { StudentGradesTable } from './StudentGradesTable'

import { getStudentGrades } from '@/shared/api/grades'
import { StudentGrade } from '@/shared/types/dashboard'

export const StudentGradesPage = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])
  const [loading, setLoading] = useState(true)

  // TODO: заменить на id из auth
  const studentId = 1

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        setLoading(true)

        const data = await getStudentGrades(studentId)

        setGrades(data)
      } finally {
        setLoading(false)
      }
    }

    fetchGrades()
  }, [studentId])

  return <StudentGradesTable grades={grades} loading={loading} />
}

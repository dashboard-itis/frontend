import React, { useEffect, useState } from 'react'

import { StudentGradesTable } from './StudentGradesTable'

import { getCurrentUser } from '@/shared/api/auth'
import { getStudentGrades } from '@/shared/api/grades'
import { StudentGrade } from '@/shared/types/dashboard'

export const StudentGradesPage = () => {
  const [grades, setGrades] = useState<StudentGrade[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        setLoading(true)

        const currentUser = await getCurrentUser()
        if (currentUser.id == null) return

        const data = await getStudentGrades(currentUser.id)

        setGrades(data)
      } finally {
        setLoading(false)
      }
    }

    fetchGrades()
  }, [])

  return <StudentGradesTable grades={grades} loading={loading} />
}

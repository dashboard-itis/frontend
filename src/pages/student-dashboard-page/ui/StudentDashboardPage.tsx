import React, { useState, useEffect } from 'react'

import { getStudentGrades } from '@/shared/api/grades'
import { getRatings } from '@/shared/api/ratings'

import { RatingStudent, StudentGrade } from '@/shared/types/dashboard'

import { StudentDashboard } from '@/widgets/dashboard-layout/StudentDashboard'

export const StudentDashboardPage = () => {
  const [ratings, setRatings] = useState<RatingStudent[]>([])
  const [grades, setGrades] = useState<StudentGrade[]>([])

  const [tab, setTab] = useState<'stats' | 'grades'>(() => {
    return (localStorage.getItem('student_tab') as 'stats' | 'grades') || 'stats'
  })

  const [course, setCourse] = useState<string | null>(() => {
    return localStorage.getItem('student_course')
  })
  // TODO: заменить на реальный id пользователя из auth
  const studentId = 1
  const groupId = 1
  useEffect(() => {
    const savedTab = localStorage.getItem('student_tab')
    const savedCourse = localStorage.getItem('student_course')

    if (savedTab) setTab(savedTab as 'stats' | 'grades')
    if (savedCourse) setCourse(savedCourse)
  }, [])
  useEffect(() => {
    localStorage.setItem('student_tab', tab)
  }, [tab])
  useEffect(() => {
    if (course) {
      localStorage.setItem('student_course', course)
    } else {
      localStorage.removeItem('student_course')
    }
  }, [course])

  useEffect(() => {
    getRatings(groupId).then((data) => {
      if (!data) {
        setRatings([])
        return
      }
      const safeData: RatingStudent[] = data.map((item) => ({
        ...item,
        full_name: item.full_name ?? 'Без имени',
        anonymized_id: item.anonymized_id ?? '—',
      }))
      setRatings(safeData)
    })
  }, [groupId])
  useEffect(() => {
    if (tab === 'grades') {
      getStudentGrades(studentId).then(setGrades)
    }
  }, [tab])

  const filteredGrades = course ? grades.filter((g) => g.course_name === course) : grades
  return (
    <StudentDashboard
      ratings={ratings}
      grades={filteredGrades}
      tab={tab}
      onTabChange={setTab}
      course={course}
      onCourseChange={setCourse}
      studentId={studentId}
      isAnonymous={true}
    />
  )
}

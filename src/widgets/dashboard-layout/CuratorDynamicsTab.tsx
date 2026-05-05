import { Select, Table, Spin, Alert } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from './DashboardWidget.module.css'

import { getStudentGrades } from '@/shared/api/grades'
import { getRatings } from '@/shared/api/ratings'

import { RatingStudent, StudentGrade } from '@/shared/types/dashboard'

type Params = {
  semester: 'SPRING' | 'FALL'
  year: number
}

interface CuratorDynamicsTabProps {
  groupId: number
}

const subjects = [
  'ОРИС',
  'Курс по выбору',
  'Инновационная экономика',
  'Английский',
  'Финансовая грамотность',
  'ТВИС',
  'Командная разработка',
]

const semesterMapping: Record<number, { semester: 'SPRING' | 'FALL'; year: number; label: string }> = {
  1: { semester: 'FALL', year: 2024, label: 'Осень 2024 (1 семестр)' },
  2: { semester: 'SPRING', year: 2025, label: 'Весна 2025 (2 семестр)' },
  3: { semester: 'FALL', year: 2025, label: 'Осень 2025 (3 семестр)' },
  4: { semester: 'SPRING', year: 2026, label: 'Весна 2026 (4 семестр)' },
  5: { semester: 'FALL', year: 2026, label: 'Осень 2026 (5 семестр)' },
  6: { semester: 'SPRING', year: 2027, label: 'Весна 2027 (6 семестр)' },
  7: { semester: 'FALL', year: 2027, label: 'Осень 2027 (7 семестр)' },
  8: { semester: 'SPRING', year: 2028, label: 'Весна 2028 (8 семестр)' },
}

const DEFAULT_SEMESTER = 4

export const CuratorDynamicsTab: React.FC<CuratorDynamicsTabProps> = ({ groupId }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [studentsList, setStudentsList] = useState<{ student_id: number; full_name: string }[]>([])

  const [currentSemesterScores, setCurrentSemesterScores] = useState<Map<number, Record<string, number>>>(new Map())

  const [selectedSemesterScores, setSelectedSemesterScores] = useState<Map<number, Record<string, number>>>(new Map())

  const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0]) // по умолчанию первый предмет
  const [selectedSemester, setSelectedSemester] = useState<number>(DEFAULT_SEMESTER)

  const fetchScores = async (students: { student_id: number; full_name: string }[], params: Params) => {
    const scoresMap = new Map<number, Record<string, number>>()

    await Promise.all(
      students.map(async (student) => {
        const grades = await getStudentGrades(student.student_id, params)

        const subjectScores: Record<string, number> = {}
        subjects.forEach((subj) => (subjectScores[subj] = 0))

        grades.forEach((grade: StudentGrade) => {
          const course = grade.course_name

          if (course && subjects.includes(course)) {
            subjectScores[course] += grade.score
          }
        })

        scoresMap.set(student.student_id, subjectScores)
      }),
    )

    return scoresMap
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const params = semesterMapping[DEFAULT_SEMESTER]
        const ratings = await getRatings(groupId, params)
        const students = (ratings as RatingStudent[]).map((s) => ({
          student_id: s.student_id,
          full_name: s.full_name,
        }))
        setStudentsList(students)
      } catch (err) {
        console.error(err)
        setError('Не удалось загрузить список студентов')
      }
    }
    fetchStudents()
  }, [groupId])

  // текущий сем
  useEffect(() => {
    const run = async () => {
      if (studentsList.length === 0) return

      setLoading(true)
      try {
        const params = semesterMapping[DEFAULT_SEMESTER]
        const result = await fetchScores(studentsList, params)
        setCurrentSemesterScores(result)
      } catch (err) {
        console.error(err)
        setError('Не удалось загрузить оценки за текущий семестр')
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [studentsList])

  // выбранный сем

  useEffect(() => {
    const run = async () => {
      if (studentsList.length === 0) return

      setLoading(true)
      try {
        const params = semesterMapping[selectedSemester]
        const result = await fetchScores(studentsList, params)
        setSelectedSemesterScores(result)
      } catch (err) {
        console.error(err)
        setError('Не удалось загрузить оценки за выбранный семестр')
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [studentsList, selectedSemester])

  const tableData = studentsList
    .map((student) => {
      const currentScores = currentSemesterScores.get(student.student_id)
      const selectedScores = selectedSemesterScores.get(student.student_id)

      if (!currentScores || !selectedScores) return null

      const currentSubjectScore = currentScores[selectedSubject] || 0
      const selectedSemesterScore = selectedScores[selectedSubject] || 0

      return {
        key: student.student_id,
        fullName: student.full_name,
        currentSubjectScore,
        selectedSemesterScore,
      }
    })
    .filter(
      (item): item is { key: number; fullName: string; currentSubjectScore: number; selectedSemesterScore: number } =>
        item !== null,
    )
    .sort((a, b) => a.fullName.localeCompare(b.fullName))

  const columns = [
    {
      title: 'ФИО студента',
      dataIndex: 'fullName',
      width: 250,
    },
    {
      title: `${selectedSubject} (${semesterMapping[DEFAULT_SEMESTER].label})`,
      dataIndex: 'currentSubjectScore',
      align: 'center' as const,
      render: (val: number) => <strong className={styles.scoreValue}>{val}</strong>,
    },
    {
      title: `${selectedSubject} (${semesterMapping[selectedSemester].label})`,
      dataIndex: 'selectedSemesterScore',
      align: 'center' as const,
      render: (val: number) => <strong>{val}</strong>,
    },
  ]

  const semesterOptions = Object.entries(semesterMapping).map(([num, data]) => ({
    value: Number(num),
    label: data.label,
  }))

  const subjectOptions = subjects.map((s) => ({ value: s, label: s }))

  if (loading && studentsList.length > 0) return <Spin tip='Загрузка...' style={{ width: '100%', margin: '32px 0' }} />
  if (error) return <Alert message={error} type='error' showIcon />

  return (
    <div className={styles.dwWidget}>
      <h2 className={styles.dwTitle}>Статистика моей группы</h2>
      <h3 className={styles.dwSubtitle}>Динамика успеваемости</h3>

      <div className={styles.filtersRow}>
        <Select
          placeholder='Выберите предмет'
          className={styles.subjectSelect}
          value={selectedSubject}
          onChange={setSelectedSubject}
          options={subjectOptions}
        />
        <Select
          placeholder='Выберите семестр для сравнения'
          className={styles.semesterSelect}
          value={selectedSemester}
          onChange={setSelectedSemester}
          options={semesterOptions}
        />
      </div>

      <Table
        dataSource={tableData}
        columns={columns}
        pagination={false}
        bordered={false}
        size='middle'
        rowClassName={(_, index) => (index % 2 === 0 ? styles.tableRowLight : styles.tableRowDark)}
      />
    </div>
  )
}

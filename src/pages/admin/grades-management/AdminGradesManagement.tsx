import { Table, Button, Popconfirm, message, Empty, Spin, Modal, Form, Input, InputNumber, Select } from 'antd'
import React, { useEffect, useState } from 'react'

import { getCourses } from '@/shared/api/courses'
import { getGrades, createStudentGrade, deleteStudentGrade, updateStudentGrade } from '@/shared/api/grades'
import { getGroups } from '@/shared/api/groups'

import { getUsers } from '@/shared/api/users'
import { hasUserRole } from '@/shared/lib/roles'
import styles from '@/widgets/dashboard-layout/DashboardWidget.module.css'

import type {
  CoursePublic,
  GradeCreate,
  GradeUpdate,
  StudentGradeResponse,
  UserPublic,
  GroupPublic,
} from '@/shared/api/api'

export const GradesManagement: React.FC = () => {
  const [grades, setGrades] = useState<StudentGradeResponse[]>([])
  const [users, setUsers] = useState<UserPublic[]>([])
  const [courses, setCourses] = useState<CoursePublic[]>([])
  const [group, setGroup] = useState<string>('all')
  const [groups, setGroups] = useState<GroupPublic[]>([])
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingGrade, setEditingGrade] = useState<StudentGradeResponse | null>(null)

  const [form] = Form.useForm()

  const fetchData = async () => {
    try {
      setLoading(true)

      const [usersData, gradesData, coursesData, groupsData] = await Promise.all([
        getUsers(),
        getGrades(),
        getCourses(),
        getGroups(),
      ])
      setUsers(usersData)
      setGrades(gradesData)
      setCourses(coursesData)
      setGroups(groupsData)
    } catch (error) {
      console.error(error)
      message.error('Не удалось загрузить данные')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const updateGroup = () => {
      setGroup(localStorage.getItem('selectedGroup') || 'all')
    }

    updateGroup()

    window.addEventListener('groupChanged', updateGroup)

    return () => window.removeEventListener('groupChanged', updateGroup)
  }, [])

  const students = users.filter(
    (user): user is UserPublic & { id: number } => hasUserRole(user, 'STUDENT') && user.id != null,
  )

  const filteredStudents = students.filter((student) =>
    selectedGroup == null ? true : student.group_id === selectedGroup,
  )

  const filteredStudentsByGroup = group === 'all' ? students : students.filter((u) => String(u.group_id) === group)

  const studentIds = filteredStudentsByGroup.map((u) => u.id)

  const getStudentName = (studentId: number) => {
    const student = users.find((user) => user.id === studentId)

    return student ? `${student.first_name} ${student.last_name}` : `ID ${studentId}`
  }

  const filteredGrades = grades.filter((g) => studentIds.includes(g.student_id))

  const handleDeleteGrade = async (gradeId: number) => {
    try {
      await deleteStudentGrade(gradeId)

      setGrades((prev) => prev.filter((grade) => grade.id !== gradeId))
      message.success('Оценка удалена')
    } catch (error) {
      console.error(error)
      message.error('Не удалось удалить оценку')
    }
  }

  const handleCreate = () => {
    setEditingGrade(null)

    setSelectedGroup(null)

    form.resetFields()

    setIsModalOpen(true)
  }

  const handleEdit = (grade: StudentGradeResponse) => {
    setEditingGrade(grade)

    const student = students.find((s) => s.id === grade.student_id)

    const groupId = student?.group_id ?? null

    setSelectedGroup(groupId)

    form.setFieldsValue({
      group_id: groupId,
      student_id: grade.student_id,
      course_id: grade.course_id,
      score: grade.score,
      comment: grade.comment,
    })

    setIsModalOpen(true)
  }
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()

      if (editingGrade) {
        const payload: GradeUpdate = {
          student_id: values.student_id,
          course_id: values.course_id,
          score: values.score,
          comment: values.comment,
        }

        const updated = await updateStudentGrade(editingGrade.id, payload)

        setGrades((prev) =>
          prev.map((grade) =>
            grade.id === editingGrade.id
              ? {
                  ...grade,
                  score: updated.score,
                  comment: updated.comment,
                  student_id: updated.student_id,
                  course_id: updated.course_id,
                }
              : grade,
          ),
        )

        message.success('Оценка обновлена')
      } else {
        const payload: GradeCreate = {
          student_id: values.student_id,
          course_id: values.course_id,
          score: values.score,
          comment: values.comment,
        }

        await createStudentGrade(payload)

        message.success('Оценка добавлена')

        await fetchData()
      }

      setIsModalOpen(false)
      form.resetFields()
    } catch (error) {
      console.error(error)
      message.error('Не удалось сохранить оценку')
    }
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <h2 className={styles.dwTitle}>Управление оценками</h2>

        <Button type='primary' onClick={handleCreate}>
          Добавить оценку
        </Button>
      </div>

      <div className={styles.dashboardContainer}>
        <Spin spinning={loading} tip='Загрузка...'>
          {grades.length === 0 ? (
            <Empty description='Нет оценок' />
          ) : (
            <Table
              pagination={false}
              scroll={{ x: 'max-content' }}
              dataSource={filteredGrades.map((grade) => ({
                key: grade.id,
                ...grade,
              }))}
              columns={[
                {
                  title: 'Студент',
                  render: (_, record) => getStudentName(record.student_id),
                },
                {
                  title: 'Группа',
                  render: (_, record) => {
                    const user = users.find((u) => u.id === record.student_id)

                    const groupData = groups.find((g) => g.id === user?.group_id)

                    return groupData?.name || '—'
                  },
                },
                {
                  title: 'Предмет',
                  dataIndex: 'course_name',
                },
                {
                  title: 'Оценка',
                  dataIndex: 'score',
                },
                {
                  title: 'Комментарий',
                  dataIndex: 'comment',
                },
                {
                  title: 'Действия',
                  render: (_, record) => (
                    <div
                      style={{
                        display: 'flex',
                        gap: 8,
                      }}
                    >
                      <Button className={styles.actionButton} onClick={() => handleEdit(record)}>
                        Редактировать
                      </Button>

                      <Popconfirm
                        title='Удалить оценку?'
                        okText='Да'
                        cancelText='Нет'
                        onConfirm={() => handleDeleteGrade(record.id)}
                      >
                        <Button className={styles.actionButton} danger>
                          Удалить
                        </Button>
                      </Popconfirm>
                    </div>
                  ),
                },
              ]}
            />
          )}
        </Spin>
      </div>

      <Modal
        title={editingGrade ? 'Редактировать оценку' : 'Добавить оценку'}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => {
          setIsModalOpen(false)
          form.resetFields()
        }}
        okText='Сохранить'
        cancelText='Отмена'
      >
        <Form form={form} layout='vertical'>
          <Form.Item
            label='Группа'
            name='group_id'
            rules={[
              {
                required: true,
                message: 'Выберите группу',
              },
            ]}
          >
            <Select
              onChange={(value) => {
                setSelectedGroup(value)

                form.setFieldValue('student_id', undefined)
              }}
              options={groups
                .filter(
                  (
                    group,
                  ): group is GroupPublic & {
                    id: number
                  } => group.id != null,
                )
                .map((group) => ({
                  value: group.id,
                  label: group.name,
                }))}
            />
          </Form.Item>

          <Form.Item
            label='Студент'
            name='student_id'
            rules={[
              {
                required: true,
                message: 'Выберите студента',
              },
            ]}
          >
            <Select
              options={filteredStudents.map((student) => ({
                value: student.id,
                label: `${student.first_name} ${student.last_name}`,
              }))}
            />
          </Form.Item>

          <Form.Item label='Предмет' name='course_id' rules={[{ required: true, message: 'Выберите предмет' }]}>
            <Select
              options={courses
                .filter(
                  (
                    course,
                  ): course is CoursePublic & {
                    id: number
                  } => course.id != null,
                )
                .map((course) => ({
                  value: course.id,
                  label: course.name,
                }))}
            />
          </Form.Item>

          <Form.Item
            label='Оценка'
            name='score'
            rules={[
              {
                required: true,
                message: 'Введите оценку',
              },
            ]}
          >
            <InputNumber min={0} max={100} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label='Комментарий' name='comment'>
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

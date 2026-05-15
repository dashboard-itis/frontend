import { Table, Button, Popconfirm, message, Empty } from 'antd'
import React from 'react'

import { studentGrades as mockGrades } from '@/shared/mocks/grades'
import { users as mockUsers } from '@/shared/mocks/users'
import styles from '@/widgets/dashboard-layout/DashboardWidget.module.css'

export const GradesManagement: React.FC = () => {
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

        <Button type='primary' onClick={() => message.info('Функция добавления оценок находится в разработке')}>
          Добавить оценку
        </Button>
      </div>

      <div className={styles.dashboardContainer}>
        {mockGrades.length === 0 ? (
          <Empty description='Нет оценок' />
        ) : (
          <Table
            pagination={false}
            scroll={{ x: 'max-content' }}
            dataSource={mockGrades.map((g) => ({
              key: g.id,
              ...g,
            }))}
            columns={[
              {
                title: 'Студент',
                render: (_, record) => {
                  const student = mockUsers.find((u) => u.id === record.student_id)

                  return student ? `${student.first_name} ${student.last_name}` : `ID ${record.student_id}`
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
                render: () => (
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Button
                      className={styles.actionButton}
                      onClick={() => message.info('Функция редактирования оценок находится в разработке')}
                    >
                      Редактировать
                    </Button>

                    <Popconfirm
                      title='Удалить оценку?'
                      okText='Да'
                      cancelText='Нет'
                      onConfirm={() => message.info('Функция удаления оценок находится в разработке')}
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
      </div>
    </div>
  )
}

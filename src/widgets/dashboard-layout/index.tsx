import { Card, Table, Select, Button, Spin, Typography, Upload } from 'antd'
import React, { useState, useEffect } from 'react'

import { DashboardWidgetProps, MOCK_STATS } from './dashboard-types'

const { Option } = Select
const { Title, Text } = Typography

const DashboardWidgetAntd: React.FC<DashboardWidgetProps> = ({
  role,
  curatorTab = 'dynamics',
  adminTab = 'users',
  isAnonymous,
}) => {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStats(MOCK_STATS)
      setLoading(false)
    }, 800)
  }, [])

  if (loading) return <Spin tip='Загрузка...' style={{ width: '100%', margin: '32px 0' }} />

  // STUDENT
  if (role === 'student') {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <Title level={3}>Статистика моей группы</Title>

        <Title level={4} style={{ marginBottom: 8 }}>
          Распределение оценок
        </Title>

        <Table
          dataSource={stats.students.map((s: any, idx: number) => ({
            key: idx,
            ...s,
            name: isAnonymous ? 'Студент ' + (idx + 1) : s.name,
          }))}
          columns={[
            { title: 'Студент', dataIndex: 'name', key: 'name' },
            { title: stats.disciplines[0], dataIndex: 'math', key: 'math' },
            { title: stats.disciplines[1], dataIndex: 'prog', key: 'prog' },
            { title: stats.disciplines[2], dataIndex: 'physics', key: 'physics' },
          ]}
          pagination={false}
        />

        <Text type='secondary' style={{ display: 'block', marginTop: 16, marginBottom: 12 }}>
          {isAnonymous
            ? 'Статистика группы обезличена (данные других студентов скрыты)'
            : 'Вы видите общую статистику группы'}
        </Text>
      </div>
    )
  }
  // CURATOR
  if (role === 'curator') {
    if (!(curatorTab === 'dynamics')) {
      return (
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Title level={3}>Статистика моей группы</Title>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <Select defaultValue='Все' style={{ minWidth: 160 }}>
              <Option value='Все'>Дисциплина: Все</Option>
              <Option value='Математика'>Линейная алгебра</Option>
              <Option value='Программирование'>ОРИС</Option>
              <Option value='Физика'>Фронтенд</Option>
            </Select>
            <Select defaultValue='Семестр' style={{ minWidth: 160 }}>
              <Option value='Семестр'>Период: Семестр</Option>
              <Option value='Месяц'>Месяц</Option>
              <Option value='Год'>Год</Option>
            </Select>
          </div>
          <Title level={4} style={{ marginBottom: 8 }}>
            Распределение оценок
          </Title>
          <Card style={{ background: '#e0e0e0', textAlign: 'center', marginBottom: 8 }}>[График распределения]</Card>
          <Text type='secondary'>График относительно всех студентов по выбранной дисциплине и периоду</Text>
        </div>
      )
    }
    // distribution tab
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <Title level={3}>Статистика моей группы</Title>
        <Title level={4} style={{ marginBottom: 8 }}>
          Распределение оценок
        </Title>
        <Card style={{ background: '#e0e0e0', textAlign: 'center', marginBottom: 8 }}>Динамика</Card>
        <Table
          dataSource={stats.students.map((s: any, idx: number) => ({ key: idx, ...s }))}
          columns={[
            { title: 'Студент', dataIndex: 'name', key: 'name' },
            { title: stats.disciplines[0], dataIndex: 'math', key: 'math' },
            { title: stats.disciplines[1], dataIndex: 'prog', key: 'prog' },
            { title: stats.disciplines[2], dataIndex: 'physics', key: 'physics' },
          ]}
          pagination={false}
        />
      </div>
    )
  }

  // ADMIN
  if (role === 'admin') {
    if (adminTab === 'users') {
      return (
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Title level={3}>Управление пользователями</Title>
          <Table
            dataSource={stats.users.map((u: any, idx: number) => ({ key: idx, ...u }))}
            columns={[
              { title: 'Фамилия', dataIndex: 'surname', key: 'surname' },
              { title: 'Имя', dataIndex: 'name', key: 'name' },
              { title: 'Отчество', dataIndex: 'patronymic', key: 'patronymic' },
              { title: 'Группа', dataIndex: 'group', key: 'group' },
              { title: 'Почта', dataIndex: 'email', key: 'email' },
              {
                title: 'Доступ',
                dataIndex: 'access',
                key: 'access',
                render: (access: string) => (
                  <Select value={access} style={{ minWidth: 100 }} disabled>
                    <Option value='Анонимный'>Анонимный</Option>
                    <Option value='Общий'>Общий</Option>
                  </Select>
                ),
              },
              {
                title: 'Роль',
                dataIndex: 'role',
                key: 'role',
                render: (role: string) => (
                  <Select value={role} style={{ minWidth: 100 }} disabled>
                    <Option value='Студент'>Студент</Option>
                    <Option value='Куратор'>Куратор</Option>
                    <Option value='Админ'>Админ</Option>
                  </Select>
                ),
              },
            ]}
            pagination={false}
          />
        </div>
      )
    }
    // import tab
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <Title level={3}>Импорт данных</Title>
        <Card style={{ marginBottom: 18 }}>
          <div>Загрузите файл с оценками (поддерживаются форматы .xlsx, .csv)</div>
          <Upload>
            <Button style={{ margin: '10px 0' }}>Выбрать файл</Button>
          </Upload>
          <Button type='primary' style={{ marginTop: 8 }}>
            Импортировать и обновить
          </Button>
        </Card>
        <Card style={{ background: '#f5f6fa', color: '#555' }}>
          Последние импортированные данные:
          <br />
          Файл: Оценки_2025.xlsx (загружен 10.03.2025)
        </Card>
      </div>
    )
  }

  return null
}

export default DashboardWidgetAntd

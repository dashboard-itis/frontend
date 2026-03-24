import { Card, Select, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

export const CuratorDynamicsTab: React.FC = () => {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <Title level={3}>Статистика моей группы</Title>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Select
          defaultValue='Все'
          style={{ minWidth: 160 }}
          options={[
            { value: 'Все', label: 'Дисциплина: Все' },
            { value: 'Математика', label: 'Линейная алгебра' },
            { value: 'Программирование', label: 'ОРИС' },
            { value: 'Физика', label: 'Фронтенд' },
          ]}
        />
        <Select
          defaultValue='Семестр'
          style={{ minWidth: 160 }}
          options={[
            { value: 'Семестр', label: 'Период: Семестр' },
            { value: 'Месяц', label: 'Месяц' },
            { value: 'Год', label: 'Год' },
          ]}
        />
      </div>
      <Title level={4} style={{ marginBottom: 8 }}>
        Распределение оценок
      </Title>
      <Card style={{ background: '#e0e0e0', textAlign: 'center', marginBottom: 8 }}>[График распределения]</Card>
      <Text type='secondary'>График относительно всех студентов по выбранной дисциплине и периоду</Text>
    </div>
  )
}

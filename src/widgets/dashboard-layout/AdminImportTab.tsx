import { Card, Button, Upload, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

export const AdminImportTab: React.FC = () => {
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

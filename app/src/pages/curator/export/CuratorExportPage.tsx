import { Button, Card, message } from 'antd'
import { useState } from 'react'

import { HiOutlineDownload } from 'react-icons/hi'

import { exportGrades } from '@/shared/api/grades'

export const CuratorExportPage = () => {
  const [loading, setLoading] = useState(false)

  const handleExport = async () => {
    setLoading(true)
    try {
      const blob = await exportGrades()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'grades_export.xlsx'
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      message.error('Ошибка при экспорте данных')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '32px' }}>
      <h1>Экспорт отчетов</h1>

      <Card style={{ maxWidth: 480, marginTop: 24 }}>
        <p>Скачайте все оценки группы в формате Excel.</p>

        <Button
          type='primary'
          icon={<HiOutlineDownload />}
          loading={loading}
          onClick={handleExport}
          style={{ marginTop: 16 }}
        >
          Скачать отчет
        </Button>
      </Card>
    </div>
  )
}

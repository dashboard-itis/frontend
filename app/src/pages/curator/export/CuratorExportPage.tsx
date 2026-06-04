import { Button, Card, message, Spin } from 'antd'
import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

import { HiOutlineDownload } from 'react-icons/hi'

import { getCurrentUser } from '@/shared/api/auth'
import { exportGrades } from '@/shared/api/grades'

export const CuratorExportPage = () => {
  const [loading, setLoading] = useState(false)
  const [groupId, setGroupId] = useState<number | null>(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
  getCurrentUser()
    .then(user => setGroupId(user.group_id ?? null))
    .finally(() => setUserLoading(false))
  }, [])

  const handleExport = async () => {
    if (!groupId) {
      message.error('Группа не найдена')
      return
    }
    setLoading(true)
    try {
      const csv = await exportGrades({ group_id: groupId })
      const lines = csv.trim().split('\n')
      const headers = lines[0].split(',')
      const rows = lines.slice(1).map(line => {
        const values = line.split(',')
        return headers.reduce((obj, header, i) => {
          obj[header] = values[i]
          return obj
        }, {} as Record<string, string>)
      })
      const ws = XLSX.utils.json_to_sheet(rows)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Grades')
      XLSX.writeFile(wb, 'grades_export.xlsx')
    } catch {
      message.error('Ошибка при экспорте данных')
    } finally {
      setLoading(false)
    }
  }

  if (userLoading) return <Spin style={{ display: 'block', margin: '80px auto' }} />

  return (
    <div style={{ padding: '32px' }}>
      <h1>Экспорт отчетов</h1>

      <Card style={{ maxWidth: 480, marginTop: 24 }}>
        <p>Скачайте оценки своей группы в формате Excel.</p>

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
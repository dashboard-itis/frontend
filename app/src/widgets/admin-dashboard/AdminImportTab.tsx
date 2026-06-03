import { Card, Button, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

import { importGrades, exportGrades } from '@/shared/api/grades'
import styles from '../dashboard-layout/DashboardWidget.module.css'

const { Dragger } = Upload

export const AdminImportTab: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [exportLoading, setExportLoading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('fileName')
    if (saved) setFileName(saved)
  }, [])

  useEffect(() => {
    if (fileName) {
      localStorage.setItem('fileName', fileName)
    } else {
      localStorage.removeItem('fileName')
    }
  }, [fileName])

  const handleBeforeUpload = (file: File) => {
    const isValid = file.name.endsWith('.csv') || file.name.endsWith('.xlsx')

    if (!isValid) {
      message.error('Поддерживаются только файлы формата .csv и .xlsx')
      return Upload.LIST_IGNORE
    }

    setFile(file)
    setFileName(file.name)
    message.success(`Файл "${file.name}" успешно загружен`)
    return false
  }

  const handleRemove = () => {
    setFile(null)
    setFileName(null)
  }
  const handleExport = async () => {
    setExportLoading(true)
    try {
      const csv = await exportGrades()
      const ws = XLSX.read(csv, { type: 'string' }).Sheets['Sheet1'] ?? XLSX.utils.aoa_to_sheet(csv.trim().split('\n').map(r => r.split(',')))
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Grades')
      XLSX.writeFile(wb, 'grades_export.xlsx')
    } catch {
      message.error('Ошибка при экспорте данных')
    } finally {
      setExportLoading(false)
    }
  }

  const handleImport = async () => {
    if (!file) {
      message.error('Сначала выберите файл для импорта')
      return
    }

    setLoading(true)
    try {
      const result = await importGrades(file)
      message.success(`Импортировано: ${result.created}, ошибок: ${result.failed}`)
      if (result.errors && result.errors.length > 0) {
        result.errors.forEach(e => message.warning(`Строка ${e.row}: ${e.message}`))
      }
      handleRemove()
    } catch {
      message.error('Ошибка при импорте файла')
    } finally {
      setLoading(false)
    }
  }

  const isFileLoaded = !!file
  return (
    <div className='importCard'>
      <h2 className={styles.dwTitle}>Импорт данных</h2>

      <div className={styles.dashboardContainer}>
        <Card>
          <div>Импортируйте файл с оценками (поддерживаются .csv, .xlsx)</div>

          <Dragger
            accept='.csv,.xlsx'
            beforeUpload={handleBeforeUpload}
            showUploadList={false}
            style={{ marginTop: 16 }}
          >
            <p>Перетащите файл сюда или нажмите</p>
          </Dragger>

          {fileName && (
            <div className={styles.fileInfo}>
              Последний файл: <b>{fileName}</b>
              {!file && <span className={styles.warningText}>(нужно выбрать заново)</span>}
            </div>
          )}
          <div className={styles.buttonsRow}>
            {fileName && (
              <Button danger className={`${styles.actionButton} ${styles.deleteButton}`} onClick={handleRemove}>
                Удалить файл
              </Button>
            )}

            <Button
              type='primary'
              className={`${styles.actionButton} ${styles.importButton}`}
              disabled={!isFileLoaded}
              loading={loading}
              onClick={handleImport}
            >
              Импортировать
            </Button>

            <Button
              className={styles.actionButton}
              loading={exportLoading}
              onClick={handleExport}
            >
              Экспортировать
            </Button>
          </div>
        </Card>

        <Card className={styles.lastFileCard}>
          Последний выбранный файл:
          <br />
          {fileName ? `Файл: ${fileName}` : 'Нет данных'}
        </Card>
      </div>
    </div>
  )
}

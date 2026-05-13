import { Card, Button, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'

import styles from './DashboardWidget.module.css'

const { Dragger } = Upload

export const AdminImportTab: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

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
      message.error('Можно импортировать только .csv и .xlsx файлы')
      return Upload.LIST_IGNORE
    }

    setFile(file)
    setFileName(file.name)
    message.success('Файл выбран')
    return false
  }

  const handleRemove = () => {
    setFile(null)
    setFileName(null)
  }
  // TODO: отправить файл на сервер в handleImport
  const handleImport = () => {
    if (!file) {
      message.error('Выберите файл заново')
      return
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Импортируем:', file)
    }

    message.success('Импорт успешно выполнен')
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
            <div style={{ marginTop: 10 }}>
              Последний файл: <b>{fileName}</b>
              {!file && <span style={{ color: 'red', marginLeft: 8 }}>(нужно выбрать заново)</span>}
            </div>
          )}

          {fileName && (
            <Button danger style={{ marginTop: 8 }} onClick={handleRemove}>
              Удалить файл
            </Button>
          )}

          <Button type='primary' style={{ marginTop: 16 }} disabled={!isFileLoaded} onClick={handleImport}>
            Импортировать
          </Button>
        </Card>

        <Card style={{ background: '#f5f6fa', color: '#555' }}>
          Последний выбранный файл:
          <br />
          {fileName ? `Файл: ${fileName}` : 'Нет данных'}
        </Card>
      </div>
    </div>
  )
}

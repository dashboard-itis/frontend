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
  // TODO: отправить файл на сервер в handleImport
  const handleImport = () => {
    if (!file) {
      message.error('Сначала выберите файл для импорта')
      return
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Импортируем:', file)
    }
    //TODO: поменять на успешный импорт, пока напишем что фича в разработке
    message.success('Функция находится в разработке!')
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
              onClick={handleImport}
            >
              Импортировать
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

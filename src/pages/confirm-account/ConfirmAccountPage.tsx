import { useEffect, useState, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import styles from './ConfirmAccountPage.module.css'

import { confirmAccount } from '@/shared/api/auth'

const ConfirmAccountPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const hasConfirmed = useRef(false)
  useEffect(() => {
    if (hasConfirmed.current) return

    hasConfirmed.current = true
    const confirm = async () => {
      const userId = searchParams.get('user_id')
      const code = searchParams.get('code')

      if (!userId || !code) {
        setStatus('error')
        setErrorMessage('Неккоректная ссылка подтверждения')
        return
      }

      try {
        await confirmAccount(Number(userId), code)

        setStatus('success')
      } catch {
        setStatus('error')
        setErrorMessage('Не удалось подтвердить аккаунт')
      }
    }
    confirm()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {status === 'loading' && (
          <>
            <h1>Подтверждение аккаунта...</h1>
            <p>Пожалуйста, подождите</p>
          </>
        )}
        {status === 'success' && (
          <>
            <h1>Аккаунт подтвержден!</h1>
            <p>Теперь вы можете войти в систему</p>
            <button className={styles.button} onClick={() => navigate('/login')}>
              Перейти ко входу
            </button>
          </>
        )}
        {status === 'error' && (
          <>
            <h1>Ошибка!</h1>
            <p>{errorMessage}</p>
            <button className={styles.button} onClick={() => navigate('/login')}>
              Вернуться
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ConfirmAccountPage

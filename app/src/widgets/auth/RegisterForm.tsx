import { Modal } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Auth.module.css'

import { useAuth } from '@/shared/hooks/useAuth'
import { getAuthErrorMessage } from '@/shared/lib/getAuthErrorMessage'
import { validatePassword } from '@/shared/lib/validatePassword'

const RegisterForm = () => {
  const navigate = useNavigate()
  const { register } = useAuth()

  const [lastName, setLastName] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const handleRegister = async () => {
    setError('')

    if (!lastName.trim() || !firstName.trim() || !email.trim()) {
      setError('Заполните все поля')
      return
    }

    if (password.length < 8) {
      setError('Пароль минимум 8 символов')
      return
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают')
      return
    }
    const passwordError = validatePassword(password)

    if (passwordError) {
      setError(passwordError)
      return
    }

    setIsLoading(true)

    try {
      await register({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      })

      setIsSuccessModalOpen(true)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(getAuthErrorMessage(e.message))
      } else {
        setError('Ошибка при регистрации')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.leftColumn} ${styles.lightColumn}`}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Регистрация</h2>
          <form
            className={styles.formContainer}
            onSubmit={async (e) => {
              e.preventDefault()
              await handleRegister()
            }}
          >
            <input
              className={`${styles.input} ${styles.lightInput}`}
              placeholder='Фамилия'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isLoading}
            />

            <input
              className={`${styles.input} ${styles.lightInput}`}
              placeholder='Имя'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
            />

            <input
              className={`${styles.input} ${styles.lightInput}`}
              placeholder='Почта'
              type='email'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />

            <input
              className={`${styles.input} ${styles.lightInput}`}
              type='password'
              autoComplete='new-password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />

            <input
              className={`${styles.input} ${styles.lightInput}`}
              type='password'
              autoComplete='new-password'
              placeholder='Повторите пароль'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />

            {error && <div className={styles.error}>{error}</div>}

            <button type='submit' className={styles.button} disabled={isLoading}>
              {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
            </button>

            <div className={styles.link}>
              Уже есть аккаунт?{' '}
              <span className={styles.linkAction} onClick={() => !isLoading && navigate('/login')}>
                Войти
              </span>
            </div>
          </form>
        </div>
      </div>

      <Modal open={isSuccessModalOpen} footer={null} closable={false} centered>
        <div className={styles.successModal}>
          <h2>Подтвердите аккаунт</h2>

          <p>
            Мы отправили письмо с подтверждением на указанную почту.
            <br />
            Перейдите по ссылке из письма, чтобы активировать аккаунт.
          </p>

          <button
            className={`${styles.button} ${styles.successModalButton}`}
            onClick={() => {
              setIsSuccessModalOpen(false)
              navigate('/login')
            }}
          >
            Перейти ко входу
          </button>
        </div>
      </Modal>

      <div className={`${styles.rightColumn} ${styles.darkColumn}`}>
        <div className={styles.welcomeBlock}>
          <div className={styles.welcomeTitle}>
            Добро
            <br />
            пожаловать
            <br />в SECCUR
          </div>

          <div className={styles.welcomeSubtitle}>Присоединяйтесь к нам и отслеживайте успеваемость</div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm

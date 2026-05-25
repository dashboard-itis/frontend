import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Auth.module.css'

import { getCurrentUser } from '@/shared/api/auth'
import { useAuth } from '@/shared/hooks/useAuth'
import { getAuthErrorMessage } from '@/shared/lib/getAuthErrorMessage'

const LoginForm = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Введите почту и пароль')
      return
    }

    setIsLoading(true)

    try {
      const roles = await login(email, password)

      if (roles.includes('ADMIN')) {
        navigate('/admin')
        return
      }

      if (roles.includes('STUDENT')) {
        const currentUser = await getCurrentUser()

        if (!currentUser.group_id) {
          navigate('/waiting-group')
          return
        }

        navigate('/student')
        return
      }

      if (roles.includes('CURATOR')) {
        navigate('/curator')
        return
      }

      navigate('/403')
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(getAuthErrorMessage(e.message))
      } else {
        setError('Ошибка при входе')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.leftColumn} ${styles.lightColumn}`}>
        <div className={styles.welcomeBlock}>
          <div className={styles.welcomeTitle}>
            С возвращением
            <br />в SECCUR
          </div>

          <div className={styles.welcomeSubtitle}>Рады видеть вас снова!</div>
        </div>
      </div>

      <div className={`${styles.rightColumn} ${styles.darkColumn}`}>
        <form
          className={styles.formContainer}
          onSubmit={async (e) => {
            e.preventDefault()
            await handleLogin()
          }}
        >
          <h2 className={styles.title}>Вход</h2>

          <input
            className={`${styles.input} ${styles.darkInput}`}
            name='email'
            autoComplete='email'
            placeholder='Почта'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <input
            className={`${styles.input} ${styles.darkInput}`}
            name='password'
            autoComplete='current-password'
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          {error && <div className={styles.error}>{error}</div>}

          <button type='submit' className={styles.button} disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Войти'}
          </button>

          <div className={styles.link}>
            Нет аккаунта?{' '}
            <span className={styles.linkAction} onClick={() => navigate('/register')}>
              Зарегистрироваться
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm

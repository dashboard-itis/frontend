import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Auth.module.css'

import { useAuth } from '@/shared/hooks/useAuth'

const LoginForm = () => {
  const navigate = useNavigate()
  const { login, roles } = useAuth()

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
      await login(email, password)
      if (roles.includes('ADMIN')) {
        navigate('/admin')
      } else if (roles.includes('CURATOR')) {
        navigate('/curator')
      } else if (roles.includes('STUDENT')) {
        navigate('/student')
      } else {
        navigate('/login')
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('Ошибка при входе')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.welcomeBlock}>
          <div className={styles.welcomeTitle}>
            С возвращением
            <br />в SECCUR
          </div>
          <div className={styles.welcomeSubtitle}>Рады видеть вас снова!</div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Вход</h2>

          <input
            className={styles.input}
            placeholder='Почта'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <input
            className={styles.input}
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          {error && <div className={styles.error}>{error}</div>}

          <button className={styles.button} onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Войти'}
          </button>

          <div className={styles.link}>
            Нет аккаунта?{' '}
            <span className={styles.linkAction} onClick={() => navigate('/register')}>
              Зарегистрироваться
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

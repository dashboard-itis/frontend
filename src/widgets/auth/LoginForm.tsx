import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Auth.module.css'

import { useAuth } from '@/shared/hooks/useAuth'

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
      const response = await login(email, password)
      const rolesFromScope = response.scope.split(' ').map((r: string) => r.toUpperCase())
      if (rolesFromScope.includes('ADMIN')) {
        navigate('/admin/dashboard')
      } else if (rolesFromScope.includes('CURATOR')) {
        navigate('/curator')
      } else if (rolesFromScope.includes('STUDENT')) {
        navigate('/student/dashboard')
      } else {
        navigate('/login')
      }
    } catch (e: any) {
      setError(e.message || 'Ошибка при входе')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
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
  )
}

export default LoginForm

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Auth.module.css'

import { useAuth } from '@/shared/hooks/useAuth'

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
    setIsLoading(true)
    try {
      await register({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        role: 'STUDENT',
      })
      navigate('/login')
    } catch (e: any) {
      setError(e.message || 'Ошибка при регистрации')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Регистрация</h2>

          <input
            className={styles.input}
            placeholder='Фамилия'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={isLoading}
          />

          <input
            className={styles.input}
            placeholder='Имя'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={isLoading}
          />

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

          <input
            className={styles.input}
            type='password'
            placeholder='Повторите пароль'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
          />

          {error && <div className={styles.error}>{error}</div>}

          <button className={styles.button} onClick={handleRegister} disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
          </button>

          <div className={styles.link}>
            Уже есть аккаунт?{' '}
            <span className={styles.linkAction} onClick={() => !isLoading && navigate('/login')}>
              Войти
            </span>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
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

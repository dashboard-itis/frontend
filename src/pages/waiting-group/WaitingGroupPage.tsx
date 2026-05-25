import { Button, Card } from 'antd'

import { useNavigate } from 'react-router-dom'

import styles from './WaitingGroupPage.module.css'

import { useAuth } from '@/shared/hooks/useAuth'

const WaitingGroupPage = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <h1 className={styles.title}>Доступ временно ограничен</h1>

        <p className={styles.text}>
          Администратор еще не назначил вам группу.
          <br />
          Попробуйте зайти позже.
        </p>

        <Button
          type='primary'
          size='large'
          onClick={() => {
            logout()
            navigate('/login')
          }}
        >
          Вернуться ко входу
        </Button>
      </Card>
    </div>
  )
}

export default WaitingGroupPage

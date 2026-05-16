import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import styles from './ForbiddenPage.module.css'

import forbiddenImage from '@/shared/assets/pages/403.png'

export const ForbiddenPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Result
        icon={<img src={forbiddenImage} alt='403' className={styles.image} />}
        title={<span className={styles.title}>Доступ запрещён</span>}
        subTitle={<span className={styles.subtitle}>У вас недостаточно прав для просмотра этой страницы</span>}
      />
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={() => navigate('/')}>
          На главную
        </Button>

        <Button className={styles.button} onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
      ,
    </div>
  )
}

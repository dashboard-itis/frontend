import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import styles from './NotFoundPage.module.css'

import notFoundImage from '@/shared/assets/pages/404.png'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Result
        icon={<img src={notFoundImage} alt='404' className={styles.image} />}
        title={<span className={styles.title}>Страница не найдена</span>}
        subTitle={
          <span className={styles.subtitle}>Возможно, страница была удалена или вы перешли по неверной ссылке</span>
        }
      />

      <div className={styles.buttons}>
        <Button className={styles.button} onClick={() => navigate('/')}>
          На главную
        </Button>

        <Button className={styles.button} onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
    </div>
  )
}

import { ReloadOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'

import styles from './ErrorFallback.module.css'

import errorImage from '@/shared/assets/pages/error.png'

export const ErrorFallback = () => {
  return (
    <div className={styles.container}>
      <Result
        icon={<img src={errorImage} alt='Ошибка' className={styles.image} />}
        title={<span className={styles.title}>Упс!</span>}
        subTitle={
          <span className={styles.subtitle}>Произошла непредвиденная ошибка. Попробуйте обновить страницу</span>
        }
        extra={
          <Button className={styles.button} icon={<ReloadOutlined />} onClick={() => window.location.reload()}>
            Обновить страницу
          </Button>
        }
      />
    </div>
  )
}

import { ReloadOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'

export const ErrorFallback = () => {
  return (
    <div>
      <Result
        status='error'
        title='Упс!'
        subTitle='Что то пошло не так. Попробуйте обновить страницу.'
        extra={
          <Button type='primary' icon={<ReloadOutlined />} onClick={() => window.location.reload()}>
            Обновить страницу
          </Button>
        }
      />
    </div>
  )
}

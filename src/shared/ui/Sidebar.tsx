import { useNavigate } from 'react-router-dom'

import styles from './Sidebar.module.css'

import { useAuth } from '@/shared/hooks/useAuth'
import SidebarButton from '@/widgets/admin-sidebar/SidebarButton'

export type SidebarItem = {
  label: string //текст кнопки
  isActive: boolean //активна ли кнопка
  onClick: () => void //функция при клике
  variant?: 'default' | 'danger' //вариант кнопки стиль
}

interface SharedSidebarProps {
  items: SidebarItem[] //массив кнопок
  headerContent?: React.ReactNode //содержимое сверху (может и не быть)
  showLogout?: boolean //показывать ли кнопку выхода
  onLogout?: () => void //функция при выходе
}

export const Sidebar = ({ items, headerContent, showLogout = true, onLogout }: SharedSidebarProps) => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
      return
    }

    logout()
    navigate('/login', { replace: true })
  }
  return (
    <div className={styles.sidebar}>
      {headerContent && <div className={styles.header}>{headerContent}</div>}

      <div className={styles.items}>
        {items.map((item, idx) => (
          <SidebarButton
            key={idx}
            text={item.label}
            active={item.isActive}
            onClick={item.onClick}
            variant={item.variant}
          />
        ))}
      </div>

      {showLogout && (
        <div className={styles.bottom}>
          <SidebarButton text='Выйти из аккаунта' variant='danger' onClick={handleLogout} />
        </div>
      )}
    </div>
  )
}

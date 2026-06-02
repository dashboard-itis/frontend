import { ReactNode } from 'react'

import styles from './SidebarButton.module.css'

type Props = {
  text: ReactNode
  onClick?: () => void
  active?: boolean
  variant?: 'default' | 'danger'
}

function SidebarButton({ text, onClick, active = false, variant = 'default' }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.sidebarButton}
        ${active ? styles.active : ''}
        ${variant === 'danger' ? styles.danger : ''}
      `}
    >
      <span className={styles.content}>{text}</span>
    </button>
  )
}

export default SidebarButton

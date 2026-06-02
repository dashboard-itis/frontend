import { Outlet } from 'react-router-dom'

import styles from './DashboardWidget.module.css'

import type { ReactNode } from 'react'

interface DashboardLayoutProps {
  sidebar: ReactNode
}

const DashboardLayout = ({ sidebar }: DashboardLayoutProps) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>{sidebar}</aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout

import React from 'react'

import { AdminImportTab } from './AdminImportTab'
import { AdminUsersTab } from './AdminUsersTab'

type AdminTab = 'users' | 'import'

interface AdminDashboardProps {
  tab?: AdminTab
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ tab = 'users' }) => {
  if (tab === 'import') {
    return <AdminImportTab />
  }

  return <AdminUsersTab />
}

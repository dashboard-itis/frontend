import React from 'react'

import { AdminGradesTab } from './AdminGradesTab'
import { AdminImportTab } from './AdminImportTab'
import { AdminUsersTab } from './AdminUsersTab'

// import { AdminGroupsTab } from './AdminGroupsTab'

type AdminTab = 'users' | 'import' | 'grades' | 'groups'

interface AdminDashboardProps {
  tab?: AdminTab
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ tab = 'users' }) => {
  if (tab === 'import') return <AdminImportTab />
  if (tab === 'grades') return <AdminGradesTab />
  // if (tab === 'groups') return <AdminGroupsTab />

  return <AdminUsersTab />
}

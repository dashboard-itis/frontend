import { useState } from 'react'

export const AdminDashboardPage = () => {
  const [tab, setTab] = useState<'users' | 'import' | 'grades'>('users')
}

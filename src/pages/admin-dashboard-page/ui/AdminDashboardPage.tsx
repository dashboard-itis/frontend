import { Button } from 'antd'
import React, { useState } from 'react'

import { AdminDashboard } from '@/widgets/dashboard-layout'

export const AdminDashboardPage = () => {
  const [tab, setTab] = useState<'users' | 'import' | 'grades'>('users')
}

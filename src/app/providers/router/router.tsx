import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './ProtectedRoute'

import { RoleRoute } from './RoleRoute'

import { AdminDashboardPage } from '@/pages/admin-dashboard-page/ui/AdminDashboardPage'
import Import from '@/pages/admin-sidebar-import-page/ui/Import'
import Analytics from '@/pages/admin-sidebar-users-page/ui/Analytics'
import Users from '@/pages/admin-sidebar-users-page/ui/Users'
import { CuratorDashboardPage } from '@/pages/curator-dashboard-page/ui/CuratorDashboardPage'
import Distribution from '@/pages/curator-sidebar-distribution-page/ui/Distribution'
import { ForbiddenPage } from '@/pages/forbidden-page/ui/ForbiddenPage'
import { LoginPage } from '@/pages/login-page/ui/LoginPage'
import { RegisterPage } from '@/pages/register-page/ui/RegisterPage'
import { StudentDashboardPage } from '@/pages/student-dashboard-page/ui/StudentDashboardPage'

import StudentPage from '@/pages/student-sidebar-page/ui/StudentPage'
import { AuthProvider } from '@/shared/context/AuthProvider'

import { AdminLayout } from '@/widgets/admin-layout/AdminLayout'
import { CuratorLayout } from '@/widgets/curator-layout/CuratorLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route
            path='/admin'
            element={
              <PrivateRoute>
                <RoleRoute roles={['ADMIN']}>
                  <AdminLayout />
                </RoleRoute>
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to='dashboard' />} />
            <Route path='dashboard' element={<AdminDashboardPage />} />
            <Route path='users' element={<Users />} />
            <Route path='import' element={<Import />} />
          </Route>

          {/*студент*/}
          <Route
            path='/student'
            element={
              <PrivateRoute>
                <RoleRoute roles={['STUDENT']}>
                  <StudentPage />
                </RoleRoute>
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to='dashboard' />} />
            <Route path='dashboard' element={<StudentDashboardPage />} />
          </Route>

          {/*куратор*/}
          <Route
            path='/curator'
            element={
              <PrivateRoute>
                <RoleRoute roles={['CURATOR']}>
                  <CuratorLayout />
                </RoleRoute>
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to='distribution' />} />
            <Route path='distribution' element={<Distribution />} />
            <Route path='analytics' element={<Analytics />} />
            <Route path='dashboard' element={<CuratorDashboardPage />} />
          </Route>

          {/* Редирект с корневого пути */}
          <Route path='/' element={<Navigate to='/login' />} />

          <Route path='/403' element={<ForbiddenPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default AppRouter

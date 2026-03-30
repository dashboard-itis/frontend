import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './ProtectedRoute'

import { RoleRoute } from './RoleRoute'

import { AdminDashboardPage } from '@/pages/admin-dashboard-page/ui/AdminDashboardPage'
import Import from '@/pages/admin-sidebar-import-page/ui/Import'
import Analytics from '@/pages/admin-sidebar-users-page/ui/Analytics'
import Users from '@/pages/admin-sidebar-users-page/ui/Users'
import { CuratorDashboardPage } from '@/pages/curator-dashboard-page/ui/CuratorDashboardPage'
import Distribution from '@/pages/curator-sidebar-distribution-page/ui/Distribution'
import { StudentDashboardPage } from '@/pages/student-dashboard-page/ui/StudentDashboardPage'

import StudentPage from '@/pages/student-sidebar-page/ui/StudentPage'
import { AuthProvider } from '@/shared/context/AuthProvider'

import { AdminLayout } from '@/widgets/admin-layout/AdminLayout'
import LoginForm from '@/widgets/auth/LoginForm'
import RegisterForm from '@/widgets/auth/RegisterForm'
import { CuratorLayout } from '@/widgets/curator-layout/CuratorLayout'

// import { LoginPage } from '@/pages/login-page/ui/LoginPage'
// import { RegisterPage } from '@/pages/register-page/ui/RegisterPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />

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
            path='/student/*'
            element={
              <PrivateRoute>
                <RoleRoute>
                  <StudentPage />
                </RoleRoute>
              </PrivateRoute>
            }
          />

          <Route
            path='/student/dashboard'
            element={
              <PrivateRoute>
                <RoleRoute>
                  <StudentDashboardPage />
                </RoleRoute>
              </PrivateRoute>
            }
          />

          {/*куратор*/}
          <Route
            path='/curator'
            element={
              <PrivateRoute>
                <RoleRoute>
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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default AppRouter

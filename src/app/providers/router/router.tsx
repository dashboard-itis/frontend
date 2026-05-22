import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'

import { GuestRoute } from './GuestRoute'
import { PrivateRoute } from './ProtectedRoute'

import { RoleRoute } from './RoleRoute'

import { AdminDashboardPage } from '@/pages/admin/dashboard/AdminDashboardPage'
import Grades from '@/pages/admin/grades/Grades'
import { GradesManagement } from '@/pages/admin/grades-management/AdminGradesManagement'
import Import from '@/pages/admin/import/Import'
import { AdminLayout } from '@/pages/admin/layout/AdminLayout'
import Users from '@/pages/admin/users/Users'
import { CuratorDashboardPage } from '@/pages/curator/dashboard/CuratorDashboardPage'
import Distribution from '@/pages/curator/distribution/Distribution'
import { CuratorLayout } from '@/pages/curator/layout/CuratorLayout'
import { ForbiddenPage } from '@/pages/forbidden-page/ForbiddenPage'
import { LoginPage } from '@/pages/login-page/LoginPage'
import { NotFoundPage } from '@/pages/notfound-page/NotFoundPage'
import { RegisterPage } from '@/pages/register-page/RegisterPage'
import { StudentDashboard } from '@/pages/student/dashboard/StudentDashboard'
import { StudentGradesPage } from '@/pages/student/grades/StudentGrades'

import StudentPage from '@/pages/student/layout/StudentLayout'
import { AuthProvider } from '@/shared/context/AuthProvider'

import { CuratorDynamicsTab } from '@/widgets/curator-dashboard/CuratorDynamicsTab'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path='/login'
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
            }
          />
          <Route
            path='/register'
            element={
              <GuestRoute>
                <RegisterPage />
              </GuestRoute>
            }
          />
          {/*админ*/}
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
            <Route path='grades' element={<Grades />} />
            <Route path='grades-management' element={<GradesManagement />} />
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
            <Route path='dashboard' element={<StudentDashboard />} />
            <Route path='grades' element={<StudentGradesPage />} />
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
            <Route path='dynamics' element={<CuratorDynamicsTab groupId={1} />} />
            <Route path='dashboard' element={<CuratorDashboardPage />} />
          </Route>

          {/* Редирект с корневого пути */}
          <Route path='/' element={<Navigate to='/login' />} />

          <Route path='/403' element={<ForbiddenPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default AppRouter

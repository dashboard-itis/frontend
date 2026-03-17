import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './ProtectedRoute'
import { RoleRoute } from './RoleRoute'

import { AdminDashboardPage } from '../../../pages/admin-dashboard-page/ui/AdminDashboardPage'
import { CuratorDashboardPage } from '../../../pages/curator-dashboard-page/ui/CuratorDashboardPage'
import { LoginPage } from '../../../pages/login-page/ui/LoginPage'
import { RegisterPage } from '../../../pages/register-page/ui/RegisterPage'
import { StudentDashboardPage } from '../../../pages/student-dashboard-page/ui/StudentDashboardPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public/общие */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        {/* student/студент */}
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

        {/* curator/куратор */}
        <Route
          path='/curator/dashboard'
          element={
            <PrivateRoute>
              <RoleRoute>
                <CuratorDashboardPage />
              </RoleRoute>
            </PrivateRoute>
          }
        />

        {/* admin/админ */}
        <Route
          path='/admin/dashboard'
          element={
            <PrivateRoute>
              <RoleRoute>
                <AdminDashboardPage />
              </RoleRoute>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

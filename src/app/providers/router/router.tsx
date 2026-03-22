import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './ProtectedRoute'
import { RoleRoute } from './RoleRoute'

import { AdminDashboardPage } from 'pages/admin-dashboard-page/ui/AdminDashboardPage'
import { CuratorDashboardPage } from 'pages/curator-dashboard-page/ui/CuratorDashboardPage'
// import { LoginPage } from '@/pages/login-page/ui/LoginPage'
// import { RegisterPage } from '@/pages/register-page/ui/RegisterPage'
import { StudentDashboardPage } from 'pages/student-dashboard-page/ui/StudentDashboardPage'

import Users from "pages/admin-sidebar-users-page/ui/Users"
import Import from "pages/admin-sidebar-import-page/ui/Import";

import StudentPage from "pages/student-sidebar-page/ui/StudentPage";

import { AdminLayout } from "widgets/admin-layout/AdminLayout"

import LoginForm from "widgets/auth/LoginForm";
import RegisterForm from "widgets/auth/RegisterForm";
import CuratorSidebar from "widgets/curator-sidebar/Sidebar";
import Distribution from "pages/curator-sidebar-distribution-page/ui/Distribution";
import Analytics from "pages/admin-sidebar-users-page/ui/Analytics";
const AppRouter = () => {
    return (
    <BrowserRouter>
      <Routes>
        {/* admin/админ */}
        {/*<Route*/}
        {/*  path='/admin/dashboard'*/}
        {/*  element={*/}
        {/*    <PrivateRoute>*/}
        {/*      <RoleRoute>*/}
        {/*        <AdminDashboardPage />*/}
        {/*      </RoleRoute>*/}
        {/*    </PrivateRoute>*/}
        {/*  }*/}
        {/*/>*/}

          {/*auth*/}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          {/*админ*/}
          {/*<Route path="/admin" element={<Navigate to="/admin/import" />} />*/}
          {/*<Route*/}
          {/*    path="/admin/users"*/}
          {/*    element={*/}
          {/*        <div style={{ display: "flex" }}>*/}
          {/*            <Sidebar />*/}
          {/*            <div style={{ flex: 1, padding: "20px" }}>*/}
          {/*                <Users />*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    }*/}
          {/*/>*/}

          {/*<Route*/}
          {/*    path="/admin/import"*/}
          {/*    element={*/}
          {/*        <div style={{ display: "flex" }}>*/}
          {/*            <Sidebar />*/}
          {/*            <div style={{ flex: 1, padding: "20px" }}>*/}
          {/*                <Import />*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    }*/}
          {/*/>*/}
          <Route
              path="/admin"
              element={
                  <PrivateRoute>
                      <RoleRoute roles={['admin']}>
                          <AdminLayout />
                      </RoleRoute>
                  </PrivateRoute>
              }
          >
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="users" element={<Users />} />
              <Route path="import" element={<Import />} />
          </Route>
          {/*студент*/}
          <Route path="/student/*" element={<StudentPage />} />

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
          <Route path="/curator" element={<Navigate to="/curator/distribution" />} />

          <Route
              path="/curator/distribution"
              element={
                  <div style={{ display: "flex" }}>
                      <CuratorSidebar />
                      <div style={{ flex: 1, padding: "20px" }}>
                          <Distribution />
                      </div>
                  </div>
              }
          />

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

          <Route
              path="/curator/analytics"
              element={
                  <div style={{ display: "flex" }}>
                      <CuratorSidebar />
                      <div style={{ flex: 1, padding: "20px" }}>
                          <Analytics />
                      </div>
                  </div>
              }
          />
      </Routes>
    </BrowserRouter>
    )
}
export default AppRouter

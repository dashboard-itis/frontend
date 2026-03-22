// import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
//
// import Sidebar from "./widgets/admin-sidebar/Sidebar";
// import Users from "./pages/admin-sidebar-users-page/ui/Users";
// import Import from "./pages/admin-sidebar-import-page/ui/Import";
//
// import StudentPage from "./pages/student-sidebar-page/ui/StudentPage";
//
// import LoginForm from "./widgets/auth/LoginForm";
// import RegisterForm from "./widgets/auth/RegisterForm";
// import CuratorSidebar from "./widgets/curator-sidebar/Sidebar";
// import Distribution from "./pages/curator-sidebar-distribution-page/ui/Distribution";
// import Analytics from "./pages/admin-sidebar-users-page/ui/Analytics";
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//
//                 {/*auth*/}
//                 <Route path="/login" element={<LoginForm />} />
//                 <Route path="/register" element={<RegisterForm />} />
//
//                 {/*админ*/}
//                 <Route path="/admin" element={<Navigate to="/admin/import" />} />
//                 <Route
//                     path="/admin/users"
//                     element={
//                         <div style={{ display: "flex" }}>
//                             <Sidebar />
//                             <div style={{ flex: 1, padding: "20px" }}>
//                                 <Users />
//                             </div>
//                         </div>
//                     }
//                 />
//
//                 <Route
//                     path="/admin/import"
//                     element={
//                         <div style={{ display: "flex" }}>
//                             <Sidebar />
//                             <div style={{ flex: 1, padding: "20px" }}>
//                                 <Import />
//                             </div>
//                         </div>
//                     }
//                 />
//
//                 {/* студент */}
//                 <Route path="/student/*" element={<StudentPage />} />
//
//                 {/!* куратор */}
//                 <Route path="/curator" element={<Navigate to="/curator/distribution" />} />
//
//                 <Route
//                     path="/curator/distribution"
//                     element={
//                         <div style={{ display: "flex" }}>
//                             <CuratorSidebar />
//                             <div style={{ flex: 1, padding: "20px" }}>
//                                 <Distribution />
//                             </div>
//                         </div>
//                     }
//                 />
//
//                 <Route
//                     path="/curator/analytics"
//                     element={
//                         <div style={{ display: "flex" }}>
//                             <CuratorSidebar />
//                             <div style={{ flex: 1, padding: "20px" }}>
//                                 <Analytics />
//                             </div>
//                         </div>
//                     }
//                 />
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// export default App;

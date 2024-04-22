import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FrontendLayout from './components/frontend/FrontendLayout';
import Home from './components/frontend/page/Index';
import About from './components/frontend/page/About';
import Error from './components/Error';
import BackendLayout from "./components/backend/layouts/BackendLayout";
import BackendAdmin from './components/backend/page/Admin';
import BackendSetting from './components/backend/page/Settings';
import SearchFile from './components/backend/page/SearchFile';
import UserList from './components/backend/page/UserList';
import RegistrationForm from './components/backend/auth/Registration';
import ForgotPassword from "./components/frontend/auth/ForgotPassword";
import Login from './components/frontend/auth/Login';
import ResetPasswordComponent from './components/frontend/auth/ResetPasswordComponent';
import Register from './components/frontend/auth/register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import OTPSubmit from './components/frontend/auth/otpSubmit';

function App() {
  const { isLogin, token } = useSelector(state => state.auth);
  const localToken = localStorage.getItem("token");
  const isAuthLogin = isLogin || localToken;
  const authToken = token || localToken;

  const userRoleString = localStorage.getItem("role");
  const userRole = JSON.parse(userRoleString);

  const location = useLocation(); // Get the current location

  const rolePermissions = {
    'Super Admin': ['/', '/admin', '/admin/settings', '/admin/searchFile', '/admin/userList', '/admin/bankbranchs', '/admin/categories', '/admin/attentions'],
    'Register': ['/', '/admin', '/admin/settings', '/admin/searchFile', '/admin/userList'],
    'Assistant Register': ['/', '/admin', '/admin/settings', '/admin/searchFile'],
    'Librarian': ['/', '/admin', '/admin/userList', '/admin/bankbranchs', '/admin/categories']
    // Add more roles and their permitted routes as needed
  };

  const isPermitted = rolePermissions[userRole?.name]?.includes(location.pathname);

  return (
    <>
      <Routes>

        <Route
          path="/login"
          element={
            isAuthLogin ? (
              <Navigate to="/admin" />
            ) : (
              <Login />
            )
          }
        />

        <Route path='/otpSubmit' element={<OTPSubmit />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path="/api/reset-password" element={<ResetPasswordComponent />} />
        <Route path="/register" element={<Register />} />

        {/* Frontend Routes */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="copyright" element={<About />} />
          <Route path="register" element={<RegistrationForm />} />
          {/* <Route path="logout" element={<Logout />} /> */}
        </Route>

        {isAuthLogin || authToken ? (
          isPermitted ? (
            <Route path="/admin" element={<BackendLayout />}>
              <Route index element={<BackendAdmin />} />
              <Route path="settings" element={<BackendSetting />} />
              <Route path="searchFile" element={<SearchFile />} />
              <Route path="userList" element={<UserList />} />
              <Route path="bankbranchs" element={<UserList />} />
              <Route path="categories" element={<UserList />} />
              <Route path="attentions" element={<UserList />} />
            </Route>
          ) : (
            <Route path="/admin" element={<Navigate to="/unauthorized" />} />
          )
        ) : (
          <Route path="/admin" element={<Navigate to="/login" />} />
        )}

        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

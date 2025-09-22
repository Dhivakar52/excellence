// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationPage';
import SelfNominationPage from './pages/SelfNominationPage';
import NominationPage from './pages/NominationPage';
import AddNomination from './components/NominationContent/AddNomination';
import ApprovalComponent from './components/Approval/ApprovalComponent';
import Login from './pages/auth/Login/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

// Get userRole from localStorage (can be null)
const userRole: 'user' | 'manager' | null = localStorage.getItem('userRole') as 'user' | 'manager' | null;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute userRole={userRole} allowedRoles={['user', 'manager']}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute userRole={userRole} allowedRoles={['user', 'manager']}>
                <NotificationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/self-nominations"
            element={
              <ProtectedRoute userRole={userRole} allowedRoles={['user', 'manager']}>
                <SelfNominationPage />
              </ProtectedRoute>
            }
          />
          <Route path="/my-nominations">
            <Route
              index
              element={
                <ProtectedRoute userRole={userRole} allowedRoles={['user', 'manager']}>
                  <NominationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="add-nomination"
              element={
                <ProtectedRoute userRole={userRole} allowedRoles={['user', 'manager']}>
                  <AddNomination />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Manager-only route */}
          <Route
            path="/approvals"
            element={
              <ProtectedRoute userRole={userRole} allowedRoles={['manager']}>
                <ApprovalComponent />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

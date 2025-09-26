// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationPage';
import SelfNominationPage from './pages/SelfNominationPage';
import NominationPage from './pages/NominationPage';
import AddNomination from './components/NominationContent/AddNomination';
import ApprovalComponent from './components/ManagerPage/ApprovalComponent';
import BusinessJury from './components/Jury/BusinessJury';
import PresidentLevel from './components/PresidentLevel/PresidentLevel';
import PresidentUnit from './components/PresidentUnitLevel/PresidentUnit';
// import Admin from './components/Admin/AdminComponent';
import AdminInner from './components/AdminSetting/AdminInner';
import AwardManagement from './components/AdminSetting/AwardManagement';
import Login from './pages/auth/Login/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import type { UserRole } from './dataTypes/roles';
import { ROLE_PAGES } from './dataTypes/roles';

// ✅ Map all main pages (excluding Add Nomination nested)
const pageComponents: Record<string, React.ReactNode> = {
  'Home': <HomePage />,
  'Notifications': <NotificationsPage />,
  'Self Nominations': <SelfNominationPage />,
  'My Nominations': <NominationPage />,
  'Approvals': <ApprovalComponent />,
  'Business Jury': <BusinessJury />,
  'President Unit': <PresidentUnit />,
  'President Level': <PresidentLevel />,
  'Award Management': <AwardManagement />,
  'Admin Setting': <AdminInner />,
};

// ✅ Role lookup with fallback for Add Nomination
const getAllowedRoles = (pageLabel: string): UserRole[] => {
  const matches = Object.entries(ROLE_PAGES)
    .filter(([_, pages]) => pages.includes(pageLabel))
    .map(([role]) => role as UserRole);

  // If Add Nomination not present, fallback to all roles from ROLE_PAGES
  if (matches.length === 0) {
    const allRoles = Object.keys(ROLE_PAGES) as UserRole[];
    return allRoles;
  }
  return matches;
};

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole | null | undefined>(undefined);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as UserRole | null;
    setUserRole(storedRole);
  }, []);

  if (userRole === undefined) {
    return null; // wait for role
  }

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login setUserRole={setUserRole} />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          {/* Dynamic mapping */}
          {Object.entries(pageComponents).map(([label, component]) => {
            const path = '/' + label.toLowerCase().replace(/\s+/g, '-'); // "My Nominations" -> "/my-nominations"
            const allowedRoles = getAllowedRoles(label);
            return (
              <Route
                key={label}
                path={path}
                element={
                  <ProtectedRoute userRole={userRole} allowedRoles={allowedRoles}>
                    {component}
                  </ProtectedRoute>
                }
              />
            );
          })}

          {/* ✅ Explicit nested Add Nomination route */}
          <Route
            path="/my-nominations/add-nomination"
            element={
              <ProtectedRoute userRole={userRole} allowedRoles={getAllowedRoles('Add Nomination')}>
                <AddNomination />
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

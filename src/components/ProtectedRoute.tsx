import React from 'react';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  userRole: 'user' | 'manager' | null;
  allowedRoles: ('user' | 'manager')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, userRole, allowedRoles }) => {
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
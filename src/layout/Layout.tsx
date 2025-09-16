import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';













// Main Component
const Layout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      <Sidebar 
        isCollapsed={sidebarCollapsed}
        isMobileOpen={mobileMenuOpen}
        onToggle={toggleSidebar}
        onMobileClose={closeMobileMenu}
      />

     
      <div className={`flex-1 transition-all duration-300 ease-in-out overflow-hidden ${
        sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'
      }`}>
        <div className="flex flex-col h-full bg-gray-100">
          <Header onMobileMenuToggle={toggleMobileMenu} />          
          <div className="flex-1 overflow-auto">
            <div 
            // className="p-4 sm:p-6 lg:p-8"
            >
              { <Outlet />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
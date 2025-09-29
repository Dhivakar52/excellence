import React from 'react';
import { 
  Home, Bell, User, FileText, LogOut, ChevronLeft , X, Gavel, CircleCheckBig ,Users ,Settings
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/layout_logo.png';
import type { UserRole } from '../dataTypes/roles';
import {ROLE_PAGES} from '../dataTypes/roles';

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggle: () => void;
  onMobileClose: () => void;
}

interface NavigationItem {
  icon: React.ElementType;
  label: string;
  path: string;
  roles?: UserRole[];
}

const navigationItems: NavigationItem[] = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: User, label: 'Self Nominations', path: '/self-nominations' },
  { icon: FileText, label: 'My Nominations', path: '/my-nominations' },
  { icon: CircleCheckBig, label: 'Approvals', path: '/approvals' },
  { icon: Gavel, label: 'Business Jury', path: '/business-jury' },
  { icon: Gavel, label: 'President Unit', path: '/president-unit' },
  { icon: Users, label: 'President Level', path: '/president-level' },
   { icon: Settings, label: 'Award Management', path: '/award-management' },
  { icon: Settings, label: 'Admin Setting', path: '/admin-setting' },
  
  // { icon: LogOut, label: 'Admin Page', path: '/admin' },
];



const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, isMobileOpen, onToggle, onMobileClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole') as UserRole | null;
const allowedPages = userRole ? ROLE_PAGES[userRole] : [];

  const handleLogout = () => navigate('/');

  const activeStyle = {
    background: 'linear-gradient(90deg, rgba(8, 128, 94, 1) 16%, rgba(24, 97, 174, 1) 100%)',
    borderLeft: '4px solid white',
    color: 'white',
  };

  return (
    <>
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={onMobileClose} />}
      <div className={`fixed lg:static inset-y-0 left-0 z-30 bg-white text-black/90 transition-all duration-300 ease-in-out shadow-xl
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} ${isMobileOpen ? 'w-64' : 'w-0 lg:w-20'} ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-hidden`}>
        
        <button onClick={onMobileClose} className="absolute top-4 right-4 lg:hidden w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><X size={16} /></button>
        {/* <button onClick={onToggle} className=" lg:block absolute -right-3 z-20 top-5 w-6 h-6 bg-white text-gray-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"><ChevronLeft size={16} /></button> */}
          <button
        onClick={onToggle}
        className="lg:block absolute -right-3 z-20 top-5 w-6 h-6 bg-white text-gray-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <ChevronLeft size={16} />
      </button>

        <div className="p-5 flex items-center border-b-1 shadow-lg border-white/10 min-h-[70px]">
          {(!isCollapsed || isMobileOpen) && <img src={logo} alt="logo" className='w-[106px] h-[40px]' />}
        </div>

        <nav className="p-3 space-y-2">
          {navigationItems
           .filter(item => allowedPages.includes(item.label))
            .map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={onMobileClose}
                  className={`flex items-center px-4 py-3 rounded-xl cursor-pointer ${isCollapsed && !isMobileOpen ? 'justify-center px-2' : ''}`}
                  style={isActive ? activeStyle : {}}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  {(!isCollapsed || isMobileOpen) && <span className="ml-3 text-sm">{item.label}</span>}
                </Link>
              );
            })}
        </nav>

        <div className="absolute bottom-5 left-0 right-0 px-5">
          <div className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-white/10 ${isCollapsed && !isMobileOpen ? 'justify-center px-2' : ''}`} onClick={handleLogout}>
            <LogOut size={20} />
            {(!isCollapsed || isMobileOpen) && <span className="ml-3 text-sm">Logout</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

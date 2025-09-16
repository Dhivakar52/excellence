import React from 'react';
import { 
  Home, 
  Bell, 
  User, 
  FileText, 
  LogOut, 
  Menu, 
  X ,
  ChevronLeft
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/layout_logo.png'


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
}



const navigationItems: NavigationItem[] = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: User, label: 'Self Nominations', path: '/self-nominations' },
  { icon: FileText, label: 'My Nominations', path: '/my-nominations' },
];


const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, isMobileOpen, onToggle, onMobileClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate('/');
  }
const activeStyle = {
  background: 'linear-gradient(90deg, rgba(8, 128, 94, 1) 16%, rgba(24, 97, 174, 1) 100%)',
  borderLeft: '4px solid white',
  color: 'white',
};


  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-30 bg-white text-black/90
          transition-all duration-300 ease-in-out shadow-xl
          ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
          ${isMobileOpen ? 'w-64' : 'w-0 lg:w-20'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-hidden
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onMobileClose}
          className="absolute top-4 right-4 lg:hidden w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
        >
          <X size={16} />
        </button>

        {/* Desktop Toggle Button */}
        <button
          onClick={onToggle}
          className="hidden lg:block absolute -right-3 top-5 w-6 h-6 bg-white text-gray-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        >
           

          <Menu size={16} />
            
        </button>

        {/* Logo */}
        <div className="p-5 flex items-center border-b-1 shadow-lg border-white/10 min-h-[70px]">
          {(!isCollapsed || isMobileOpen) && (
            <div className="ml-3">
                <img src={logo} alt="" className='w-[106px] h-[40px]' />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-2">
          {navigationItems.map((item) => {
           const isActive =
      item.path === '/my-nominations'
        ? location.pathname.startsWith('/my-nominations')
        : location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={onMobileClose}
                className={`
                  flex items-center px-4 py-3 rounded-xl cursor-pointer
                 
                 
                  ${(isCollapsed && !isMobileOpen) ? 'justify-center px-2' : ''}
                `}
                style={isActive ? activeStyle : {}}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {(!isCollapsed || isMobileOpen) && (
                  <span className="ml-3 text-sm">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-5 left-0 right-0 px-5">
          <div
            className={`
              flex items-center px-4 py-3 rounded-xl cursor-pointer 
              transition-all duration-200 hover:bg-white/10
              ${(isCollapsed && !isMobileOpen) ? 'justify-center px-2' : ''}
            `}
            onClick={handleLogout}
          >
            <LogOut size={20} className="flex-shrink-0" />
            {(!isCollapsed || isMobileOpen) && (
              <span className="ml-3 text-sm">Logout</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

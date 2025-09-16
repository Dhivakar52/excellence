
import React , {useState} from 'react';

import { Bell} from 'lucide-react';
import NotificationModal from '../components/Notification/NotificationModal';

const Demo = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        <Bell className="w-4 h-4" />
        <span>Open Notifications</span>
      </button>
      
      <NotificationModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Demo;
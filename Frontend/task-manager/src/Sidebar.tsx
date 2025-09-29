import React from 'react';
import { Home, List, Users, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  activeSection,
  onSectionChange,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lists', label: 'My Lists', icon: List },
    { id: 'shared', label: 'Shared With Me', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div
      className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-slate-700 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-white font-bold text-xl">TaskFlow</span>
        </div>
        <button
          onClick={onToggle}
          className="lg:hidden p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-2 min-h-[44px] ${
                isActive
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
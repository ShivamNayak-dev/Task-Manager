import React from 'react';
import { Search, Bell, Plus, Users, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  onInviteTeam: () => void;
  onCreateTask: () => void;
  currentScreen: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, onInviteTeam, onCreateTask, currentScreen }) => {
  const getTitle = () => {
    switch (currentScreen) {
      case 'dashboard':
        return 'My Lists';
      case 'board':
        return 'My Project Board';
      case 'settings':
        return 'Settings';
      default:
        return 'TaskFlow';
    }
  };

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Menu size={18} />
          </button>
          <h1 className="text-white text-lg lg:text-xl font-bold">{getTitle()}</h1>
          {currentScreen === 'board' && (
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">JD</span>
              </div>
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">SM</span>
              </div>
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">AL</span>
              </div>
              <button
                onClick={onInviteTeam}
                className="w-6 h-6 border-2 border-dashed border-slate-500 rounded-full flex items-center justify-center hover:border-teal-400 transition-colors"
              >
                <Plus size={12} className="text-slate-500 hover:text-teal-400" />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-2 pl-10 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-slate-600 transition-all min-h-[44px]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
          </div>

          <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors relative min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"></span>
          </button>

          {currentScreen === 'board' && (
            <>
              <button
                onClick={onCreateTask}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors font-medium min-h-[44px]"
              >
                <Plus size={16} />
                <span className="hidden sm:inline">New Task</span>
              </button>

              <button
                onClick={onInviteTeam}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors font-medium min-h-[44px]"
              >
                <Users size={16} />
                <span className="hidden sm:inline">Invite</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
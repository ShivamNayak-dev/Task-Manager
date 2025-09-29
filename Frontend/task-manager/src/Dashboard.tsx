import React from 'react';
import { Plus, Users, Clock, MoreVertical } from 'lucide-react';

interface DashboardProps {
  onSelectBoard: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectBoard }) => {
  const mockLists = [
    {
      id: '1',
      title: 'Website Redesign Project',
      collaborators: [
        { name: 'John Doe', avatar: 'JD', color: 'bg-teal-500' },
        { name: 'Sarah Miller', avatar: 'SM', color: 'bg-blue-500' },
        { name: 'Alex Lee', avatar: 'AL', color: 'bg-purple-500' },
      ],
      lastUpdated: '2 hours ago',
      taskCount: 12,
      completedCount: 4,
    },
    {
      id: '2',
      title: 'Mobile App Development',
      collaborators: [
        { name: 'Sarah Miller', avatar: 'SM', color: 'bg-blue-500' },
        { name: 'Alex Lee', avatar: 'AL', color: 'bg-purple-500' },
      ],
      lastUpdated: '1 day ago',
      taskCount: 8,
      completedCount: 2,
    },
    {
      id: '3',
      title: 'Marketing Campaign Q1',
      collaborators: [
        { name: 'John Doe', avatar: 'JD', color: 'bg-teal-500' },
        { name: 'Sarah Miller', avatar: 'SM', color: 'bg-blue-500' },
      ],
      lastUpdated: '3 days ago',
      taskCount: 15,
      completedCount: 8,
    },
    {
      id: '4',
      title: 'Product Research',
      collaborators: [
        { name: 'Alex Lee', avatar: 'AL', color: 'bg-purple-500' },
      ],
      lastUpdated: '1 week ago',
      taskCount: 6,
      completedCount: 6,
    },
  ];

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2">My Lists</h1>
        <p className="text-slate-400">Manage your projects and collaborate with your team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {/* Create New List Card */}
        <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-teal-500 hover:bg-slate-700/50 transition-all cursor-pointer group min-h-[200px]">
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
            <Plus size={24} className="text-white" />
          </div>
          <h3 className="text-white font-semibold mb-2">Create New List</h3>
          <p className="text-slate-400 text-sm">Start a new project and invite your team</p>
        </div>

        {/* Project Lists */}
        {mockLists.map((list) => (
          <div
            key={list.id}
            onClick={onSelectBoard}
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-700/50 hover:border-slate-600 transition-all cursor-pointer shadow-lg hover:shadow-xl group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-white font-semibold text-lg leading-tight flex-1 pr-2 group-hover:text-teal-300 transition-colors">
                {list.title}
              </h3>
              <button className="text-slate-400 hover:text-slate-300 p-1 rounded transition-colors opacity-0 group-hover:opacity-100">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <div className="flex -space-x-2">
                {list.collaborators.slice(0, 3).map((collaborator, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 ${collaborator.color} rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-slate-800`}
                  >
                    {collaborator.avatar}
                  </div>
                ))}
                {list.collaborators.length > 3 && (
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-slate-800">
                    +{list.collaborators.length - 3}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-1 text-slate-400">
                <Users size={14} />
                <span className="text-xs">{list.collaborators.length}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">Progress</span>
                <span className="text-slate-300">
                  {list.completedCount}/{list.taskCount} tasks
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-teal-500 h-2 rounded-full transition-all"
                  style={{ width: `${(list.completedCount / list.taskCount) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-slate-400">
              <Clock size={14} />
              <span className="text-xs">Updated {list.lastUpdated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
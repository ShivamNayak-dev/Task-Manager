import React from 'react';
import { MoreHorizontal, MessageSquare, Calendar, User } from 'lucide-react';

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description?: string;
    assignee?: {
      name: string;
      avatar: string;
      color: string;
    };
    dueDate?: string;
    comments: number;
    priority: 'low' | 'medium' | 'high';
  };
  isDragging?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, isDragging = false }) => {
  const priorityColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500',
  };

  const priorityBorders = {
    low: 'border-l-green-500',
    medium: 'border-l-yellow-500',
    high: 'border-l-red-500',
  };

  return (
    <div
      className={`bg-slate-800 rounded-lg border border-slate-700 border-l-4 ${
        priorityBorders[task.priority]
      } p-4 mb-3 shadow-lg hover:shadow-xl transition-all duration-200 cursor-grab active:cursor-grabbing ${
        isDragging ? 'opacity-50 rotate-2' : 'hover:-translate-y-1'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-sm leading-tight flex-1 pr-2">
          {task.title}
        </h3>
        <button className="text-slate-400 hover:text-slate-300 p-1 rounded transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {task.description && (
        <p className="text-slate-400 text-xs mb-4 leading-relaxed">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {task.assignee ? (
            <div className="flex items-center space-x-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${task.assignee.color}`}
              >
                {task.assignee.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-slate-400 text-xs">{task.assignee.name}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-slate-500">
              <User size={16} />
              <span className="text-xs">Unassigned</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {task.dueDate && (
            <div className="flex items-center space-x-1 text-slate-400">
              <Calendar size={12} />
              <span className="text-xs">{task.dueDate}</span>
            </div>
          )}
          {task.comments > 0 && (
            <div className="flex items-center space-x-1 text-slate-400">
              <MessageSquare size={12} />
              <span className="text-xs">{task.comments}</span>
            </div>
          )}
          <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
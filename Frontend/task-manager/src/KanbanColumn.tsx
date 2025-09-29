import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import TaskCard from './TaskCard';

interface KanbanColumnProps {
  title: string;
  tasks: Array<{
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
  }>;
  color: string;
  onAddTask: () => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  tasks,
  color,
  onAddTask,
}) => {
  return (
    <div className="flex-1 lg:min-w-80 w-full">
      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div className={`${color} px-4 py-3 flex items-center justify-between`}>
          <div className="flex items-center space-x-2">
            <h2 className="text-white font-semibold">{title}</h2>
            <span className="bg-black/20 text-white text-xs px-2 py-1 rounded-full">
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={onAddTask}
              className="p-1.5 rounded-lg bg-black/20 hover:bg-black/30 text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Plus size={16} />
            </button>
            <button className="p-1.5 rounded-lg bg-black/20 hover:bg-black/30 text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        <div className="p-4 min-h-64 lg:min-h-96 max-h-[60vh] lg:max-h-[70vh] overflow-y-auto">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          
          {tasks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-500 mb-2">No tasks yet</div>
              <button
                onClick={onAddTask}
                className="text-teal-400 hover:text-teal-300 text-sm transition-colors min-h-[44px] px-4 py-2"
              >
                Add your first task
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;
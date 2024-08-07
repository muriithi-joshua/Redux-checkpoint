
import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, filter, onToggleDone, onEdit }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ListTask;

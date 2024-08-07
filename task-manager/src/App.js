// src/App.js
import React, { useState } from 'react';
import "./App.css"
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editDescription, setEditDescription] = useState('');

  const handleAddTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const handleEditTask = (id) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      setEditTaskId(id);
      setEditDescription(task.description);
    }
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editTaskId ? { ...task, description: editDescription } : task
    ));
    setEditTaskId(null);
    setEditDescription('');
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const buttonsDiv ={
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    padding:'8px'
    
  }
  const buttonStyle ={
    margin:"5px",
    cursor:'pointer',
    height: '40px',
    width: '80px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'grey',
    color:'white'
  }

  return (
    <div>
      <h1>Task Management</h1>
      <AddTask onAddTask={handleAddTask} />
      <div style={buttonsDiv}>
        <button style={buttonStyle} onClick={() => handleFilterChange('all')}>All</button>
        <button style={buttonStyle} onClick={() => handleFilterChange('done')}>Done</button>
        <button style={buttonStyle} onClick={() => handleFilterChange('notDone')}>Not Done</button>
      </div>
      <ListTask
        tasks={tasks}
        filter={filter}
        onToggleDone={handleToggleDone}
        onEdit={handleEditTask}
      />
      {editTaskId && (
        <div >
          <input
            style={{ height: '30px', width:'100%', border:'none',borderRadius:'5px', fontSize:'15px'}}
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button style={buttonStyle} onClick={handleSaveEdit}>Save</button>
          <button style={buttonStyle} onClick={() => setEditTaskId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default App;

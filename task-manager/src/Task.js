
import React from 'react';

const Task = ({ task, onToggleDone, onEdit }) => {
    const editStyle ={
        float:"right",
        cursor:"pointer",
        width:'50px',
        height:'25px',
        border:'none',
        borderRadius:'5px'
        
    }

    const checkboxStyle ={
        float:'right',
        height:'25px'
        }

  return (
    <div style={{marginTop:'15px'}}>
      <input
      style={checkboxStyle}
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggleDone(task.id)}
      />
      <span>{task.description}</span>
      <button style={editStyle} onClick={() => onEdit(task.id)}>Edit</button>
    </div>
  );
};

export default Task;

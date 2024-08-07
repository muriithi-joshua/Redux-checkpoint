
import React, { useState } from 'react';


const AddTask = ({ onAddTask }) => {

  const [description, setDescription] = useState('');

  const handleAddClick = () => {
    if (description.trim()) {
      onAddTask(description);
      setDescription('');
    }
  };
  const myStyle = {
    color:'black',
    fontSize:'20px',
    padding:'4px',
    margin:'7px',
    border:'1px solid white',
    borderRadius: '5px',
    boxShadow:'10px 10px 10px #888888',
    width:"330px",
    height:"35px",
   

}
 const buttonStyle ={
    backgroundColor:'#888888',
    border:'1px solid #888888',
    borderRadius: '5px',
    height:"45px",
    
    width:"100px",
    fontSize:'30px',
    color:'white',
 }

  return (
    <div style={{justifyContent:"center"}}>
      <input
        style={myStyle}
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button style={buttonStyle} onClick={handleAddClick}>+</button>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";
import axios from "axios"

const Create = () => {
    const [task, setTask] = useState()
    const handleAdd = () => {
axios.post('https://todo-foqz.onrender.com', {task: task})
.then(result => {
  window.location.reload()
})
.catch(err => console.log(err))
    }
  return (
    <div className="create_form">
      <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;

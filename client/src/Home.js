import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://todo-foqz.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("https://todo-foqz.onrender.com/update/"+id)
      .then((result) => {
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("https://todo-foqz.onrender.com/delete/"+id)
      .then((result) => {
        window.location.reload()
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      <br />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? 
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
               : 
                <BsCircleFill className="icon" />
              }
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" 
                onClick={() => handleDelete(todo._id)}/>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;

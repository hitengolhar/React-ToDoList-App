import React, { useState } from "react";
import "./style.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState("");
  //const [taskList, setTaskList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = { tasks };
      await fetch("http://localhost:8000/addTask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setTasks("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1>To-Do List App</h1>
      <div className="row">
        <form onSubmit={handleSubmit} className="form-control">
          <label className="label">Enter The task: </label>
          <input
            className="inputBox"
            type="text"
            name="tasks"
            value={tasks}
            placeholder="Enter Groceries"
            onChange={(event) => {
              setTasks(event.target.value);
            }}
          />
          <button type="submit" className="btn-light">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};
export default ToDoList;

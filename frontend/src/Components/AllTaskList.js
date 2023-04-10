import React, { useEffect, useState } from "react";
import "./style.css";

const AllTaskList = () => {
  const [allTasks, setAllTasks] = useState([]);
  const fetchTask = async () => {
    await fetch("http://localhost:8000/tasks", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((allTasks) => setAllTasks(allTasks));
  };
  const deleteTask = (e, id) => {
    console.log(id);

    return fetch(`http://localhost:8000/tasks/deleteTask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    fetchTask();
  };
  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div className="row">
      <ul className="ul">
        {allTasks !== [] &&
          allTasks.map((task) => {
            return (
              <li key={task.id}>
                {task.taskName}
                <button className="btn" onClick={(e) => deleteTask(e, task.id)}>
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default AllTaskList;

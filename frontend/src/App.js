import React from "react";
import ToDoList from "./Components/ToDoList.js";
import AllTaskList from "./Components/AllTaskList.js";
// comments
//to run this app we need to create mysql database with Table name as 'tasks' and also need to create Columns with column name 'id' and 'taskName'.
function App() {
  return (
    <div className="App">
      <ToDoList />
      <AllTaskList />
    </div>
  );
}

export default App;

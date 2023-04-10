const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const connection = require("./Database/mysql.js");
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addTask", async (req, res) => {
  console.log(req.body);
  //let tasks = req.body.tasks;
  connection.query(`INSERT INTO tasks(taskName) VALUES('${req.body.tasks}');`);
  res.send("Data Inserted Successfully!");
});
app.get("/tasks", async (req, res) => {
  connection.query("SELECT * FROM tasks", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.delete("/tasks/deleteTask/:id", (req, res) => {
  console.log(req.params.id);
  let id = req.params.id;
  connection.query(
    `DELETE FROM tasks WHERE id=${id}`,
    //id,
    (err, res) => {
      if (err) throw err;
    }
  );
  res.send("Data Deleted!");
});
app.listen(PORT, () => {
  console.log(`Connected to Server with ${PORT}!`);
});

import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";

function App() {
  //---------
  // const url = "/";
  // // const [users, setUsers] = useState([]);
  // let dbTasks;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/db", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        // setUsers(data);
        const dbTasks = data;
        // console.log("dbTasks", dbTasks);
        setTasks(dbTasks);
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
      });
  }, []);

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>
        夏休みの<span>宿題リスト</span>
      </h1>
      <div className="body">
        <div className="list">
          <AddTask tasks={tasks} setTasks={setTasks} />
          <div className="scroll">
            <TaskList tasks={tasks} toggleTask={toggleTask} />
          </div>
        </div>
        <a className="resizeimage">
          <img src="summer.png" alt="画像" />
        </a>
      </div>
      <h4>
        {/* Uncompleted Tasks: {tasks.filter((task) => !task.completed).length} */}
      </h4>
    </div>
  );
}

export default App;

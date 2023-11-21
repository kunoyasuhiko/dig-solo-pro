import React from "react";
import Task from "./Task";
import "./App.css";

const TaskList = ({ tasks, toggleTask }) => {
  return tasks.map((task) => (
    <Task task={task} key={task.id} toggleTask={toggleTask} />
  ));
};

export default TaskList;

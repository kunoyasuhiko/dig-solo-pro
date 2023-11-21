import React from "react";
import "./App.css";

const Task = ({ task, toggleTask }) => {
  const handleTaskClick = () => {
    toggleTask(task.id);
  };
  return (
    <div className="task">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          onChange={handleTaskClick}
        />
      </label>
      {task.name}
    </div>
  );
};

export default Task;

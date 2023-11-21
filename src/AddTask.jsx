import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const AddTask = ({ tasks, setTasks }) => {
  const taskNameRef = useRef();

  const handleAddTask = () => {
    const name = taskNameRef.current.value;
    if (name === "") return;
    setTasks((curTasks) => {
      // return [...curTasks, { id: uuidv4(), name: name, completed: false }];
      return [{ id: uuidv4(), name: name, completed: false }, ...curTasks];
    });
    taskNameRef.current.value = null;
  };

  const handleClearTask = () => {
    const newTasks = tasks.filter((task) => task.completed === false);
    setTasks(newTasks);
  };
  return (
    <>
      <div>
        <input type="text" ref={taskNameRef} placeholder="入力してください" />
      </div>
      <div>
        <button className="b1" onClick={handleAddTask}>
          新規タスクの追加
        </button>
      </div>
      <div>
        <button className="b2" onClick={handleClearTask}>
          完了タスクの削除
        </button>
      </div>
    </>
  );
};

export default AddTask;

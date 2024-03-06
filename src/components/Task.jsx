import React from "react";
import "./Task.css";
import { useState } from "react";
import { useToDoContext } from "../contexts";

function Task({ taskName }) {
  const [isEditable, setIsEditable] = useState(false);
  const [taskNameText, setTaskNameText] = useState(taskName.taskName);
  const { updateTask, deleteTask, markAsComplete } = useToDoContext();

  const editTask = () => {
    updateTask(taskName.id, { ...taskName, taskName: taskNameText });
    setIsEditable(false);
  };

  const taskDone = () => {
    markAsComplete(taskName.id);
  };

  return (
    <div className={`task ${taskName.isCompleted ? "task-completed" : ""}`}>
      <input
        type="checkbox"
        className="task-check"
        checked={taskName.isCompleted}
        onChange={taskDone}
        disabled={isEditable}
      />
      <input
        type="text"
        className={`task-name ${isEditable ? "task-name-edit" : "" }`}
        value={taskNameText}
        onChange={(e) => setTaskNameText(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className={`action-btn edit-btn ${taskName.isCompleted ?"disabled-btn" : ""}`}
        onClick={() => {
          if (taskName.isCompleted) return;

          if (isEditable) {
            editTask();
          } else {
            setIsEditable((prev) => !prev); // basically set true
          }
        }}
        
      >
        <i className={`ri-${isEditable ? "save-3" : "pencil"}-fill`}></i>
      </button>
      <button className="action-btn delete-btn" onClick={() => deleteTask(taskName.id)}>
        <i className="ri-delete-bin-fill"></i>
      </button>
    </div>
  );
}

export default Task;

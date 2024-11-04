import React from "react";
import "./Card.css";
export const Card = ({task}) => {
  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="card-id">{task.id}</span>
        <img src="" alt="User" className="user-avatar" />
      </div>
      <div className="card-title">{task.title}</div>
      <div className="card-footer">
        <div className="priority-tag">
          <span className="priority-icon">❗</span>
        </div>
        <div className="task-type">
          {task.tag}
        </div>
      </div>
    </div>
  );
};

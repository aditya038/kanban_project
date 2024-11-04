import React from 'react';
import { Card } from './Card';
import './Column.css';
import { AddSvg } from './AddSvg';
import { ThreeDotSvg } from './ThreeDotSvg';

export const Column = ({ title, tasks }) => {

  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className='column-title'>
          {title}
          <span className="task-count">{tasks.length}</span>
        </div>
        <span style={{display:'flex',gap:'5px'}}>
          <AddSvg/>
          <ThreeDotSvg/>
        </span>
      </div>
      
      <div className="task-list">
        {tasks.map((task, index) => (
          <Card key={index} task={task}/>
        ))}
      </div>
    </div>
  )
}

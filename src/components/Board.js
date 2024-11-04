import React from 'react';
import './Board.css';
import { Column } from './Column'
export const Board = ({groupedTickets}) => {

  return (
    <div className="board" >
      {
        Object.entries(groupedTickets).map(([group, tickets])=> 
        <Column key = {group} title={group} tasks={tickets}/>
        )
      }
    </div>
  )
}

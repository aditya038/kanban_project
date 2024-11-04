import React, { useState } from "react";
import { DisplaySvg } from "./DisplaySvg";
import { DownSvg } from "./DownSvg";
import "./Header.css";

export const Header = ({onGroupingChange,onOrderingChange}) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <button className="header-btn" onClick={()=> setIsOpen(!isOpen)}>
        <DisplaySvg/>
        <div className="header-btn-text">Display</div>
        <DownSvg/>
      </button>
      <div 
        className="menu" 
        style={{display: !isOpen? 'none':''}}
      >

        <div className="option">
            <label>Grouping</label>
            <select className="select" onChange={(evt)=>onGroupingChange(evt.target.value)}>
                <option value="status">Status</option>
                <option value="user">Users</option>
                <option value="priority">Priority</option>
            </select>
        </div>

        <div className="option">
            <label>Ordering</label>
            <select className="select" onChange={(evt)=>onOrderingChange(evt.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
        </div>

      </div>
    </header>
  );
};

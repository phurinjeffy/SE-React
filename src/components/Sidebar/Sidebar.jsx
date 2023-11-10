import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li className="Section" key={key}>
            <NavLink to={val.link} activeClassName="active">
              <div id="icon">{val.icon}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

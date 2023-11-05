import React, { useState } from "react";
import "./sidebar.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="Section"
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../../staticData";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={`${styles.sidebar}`}>
      <ul className="mt-1 p-2">
        {sidebarData.map(({ path, icon, optionName }) => (
          <li key={path}>
            <NavLink
              to={`${path}`}
              className={`${styles.sidebar__link} 
                 flex-row items-center rounded-sm p-1 text-base`}
            >
              <span className="material-icons-outlined mr-2">{icon}</span>
              {optionName}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

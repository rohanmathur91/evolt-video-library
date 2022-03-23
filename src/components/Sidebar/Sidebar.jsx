import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../../staticData";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={`${styles.sidebar}`}>
      <ul className="mt-1 p-2">
        {sidebarData.map(({ icon, optionName, path }) => (
          <li>
            <NavLink
              to={`/${path}`}
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
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

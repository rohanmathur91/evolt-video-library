import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const MobileNavigation = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`${styles.sidebar} transition-2 fixed top-0 left-0 z-3 ${
        showSidebar ? styles.sidebar__mobile : ""
      }`}
    >
      <div
        className={`${styles.sidebar__header} p-2 flex-row content-space-between items-center`}
      >
        <div className="text-lg">Welcome, User!</div>
        <button
          onClick={() => setShowSidebar(false)}
          className={`${styles.sidebar__close_btn} flex-row flex-center rounded-full`}
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>

      <ul className="mt-1 p-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
            }
          >
            Exlore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore/playlist"
            className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
            }
          >
            Playlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore/watch-later"
            className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
            }
          >
            Watch later
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore/history"
            className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
            }
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

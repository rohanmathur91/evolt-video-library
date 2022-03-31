import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts";
import { sidebarData } from "../../staticData";
import styles from "./MobileNavigation.module.css";

export const MobileNavigation = ({ showSidebar, setShowSidebar }) => {
  const { user } = useAuth();

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

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
          onClick={handleCloseSidebar}
          className={`${styles.sidebar__close_btn} flex-row flex-center rounded-full`}
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>

      <ul className="mt-1 p-1">
        <li>
          <NavLink
            to={`${user ? "/profile" : "/login"}`}
            className={({ isActive }) =>
              `${styles.sidebar__link} ${
                isActive ? styles.active__link : ""
              } flex-row items-center rounded-sm p-1 text-base`
            }
          >
            <span className="material-icons-outlined mr-2">person_outline</span>
            {user ? "Profile" : "Login"}
          </NavLink>
        </li>

        {sidebarData.map(({ path, icon, optionName }) => (
          <li key={path}>
            <NavLink
              to={`${path}`}
              className={({ isActive }) =>
                `${styles.sidebar__link} ${
                  isActive ? styles.active__link : ""
                } flex-row items-center rounded-sm p-1 text-base`
              }
            >
              <span className="material-icons-outlined mr-2">{icon}</span>
              {optionName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

MobileNavigation.defaultProps = {
  showSidebar: false,
  setShowSidebar: () => {},
};

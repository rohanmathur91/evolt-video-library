import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Explore.module.css";

export const Explore = () => {
  return (
    <div className="flex-row">
      <Sidebar />
      <div className={`${styles.container} w-100 mt-1 px-2`}>
        <Outlet />
      </div>
    </div>
  );
};

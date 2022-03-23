import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Explore.module.css";

export const Explore = () => {
  <div className={`${styles.container} flex-row`}>
    <Sidebar />

    <div className="w-100">
      <Outlet />
    </div>
  </div>;
};

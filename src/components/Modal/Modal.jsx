import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <div className={`${styles.modal__container} flex-row flex-center`}>
      {children}
    </div>
  );
};

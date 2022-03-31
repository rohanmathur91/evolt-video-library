import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export const Modal = ({ handleShowModal, children }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => handleShowModal(false)}
      className={`${styles.modal__container} flex-row flex-center`}
    >
      {children}
    </div>,
    document.body
  );
};

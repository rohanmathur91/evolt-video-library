import React from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../../contexts";
import styles from "./Modal.module.css";

export const Modal = ({ handleShowModal, children }) => {
  const { theme } = useTheme();

  return ReactDOM.createPortal(
    <div
      onClick={() => handleShowModal(false)}
      className={`${styles.modal__container} ${theme} flex-row flex-center`}
    >
      {children}
    </div>,
    document.body
  );
};

import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} flex-column flex-center py-7`}>
      <p className="mb-1">Made and design by Rohan.</p>

      <div>
        <a
          className={`${styles.link} mx-1`}
          href="https://github.com/rohanmathur91/evolt-video-library"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className={`${styles.icons} fa fa-github ${styles.icons} transition-2`}
          ></i>
        </a>
        <a
          className={`${styles.link} mx-1`}
          href="https://twitter.com/@rohanmathur91"
          target="_blank"
          rel="noreferrer"
        >
          <i className={`${styles.icons} fa fa-twitter transition-2`}></i>
        </a>
        <a
          className={`${styles.link} mx-1`}
          href="https://www.linkedin.com/in/rohanmathur04/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className={`${styles.icons} fa fa-linkedin-square transition-2`}
          ></i>
        </a>
      </div>
    </footer>
  );
};

import React from "react";
import styles from "./VideoCard.module.css";

export const VideoCard = () => {
  return (
    <div className={`${styles.card} p-1 m-1 border`}>
      <div>
        <img src="https://picsum.photos/300/300" alt="video" />
      </div>

      <h3 className={`${styles.title} my-1`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
        accusantium, dolores deleniti praesentium dicta illo unde inventore
      </h3>
      <div className={`${styles.details} flex-row content-space-between`}>
        <div className="text-sm icon-container">
          <span class="material-icons text-sm">visibility</span>
          <span className={`${styles.views} text-sm`}>100</span>
        </div>

        <div className="text-sm icon-container">
          <span class="material-icons-outlined text-sm">timer</span>
          <span className={`${styles.duration} text-sm`}> 10: 30min</span>
        </div>
      </div>
    </div>
  );
};

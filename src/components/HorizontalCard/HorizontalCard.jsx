import React from "react";
import styles from "./HorizontalCard.module.css";

export const HorizontalCard = ({ video }) => {
  const { alt, thumbnail, views, duration, title } = video;

  return (
    <div className={`${styles.card} flex-row my-1 p-1 border rounded-sm`}>
      <div className="w-20">
        <img className="h-100 rounded-sm" src={thumbnail} alt={alt} />
      </div>

      <div className="flex-column mx-2">
        <h3 className={`${styles.title}`}>{title}</h3>

        <div
          className={`${styles.details} flex-row content-space-between pt-1`}
        >
          <div className="text-sm icon-container">
            <span className="material-icons text-sm">visibility</span>
            <span className={`${styles.views} text-sm`}>{views} views</span>
          </div>
          <div className="text-sm icon-container">
            <span className="material-icons-outlined text-sm">timer</span>
            <span className={`${styles.duration} text-sm`}>{duration}</span>
          </div>
        </div>
      </div>

      <span className="material-icons-outlined mx-1">delete</span>
    </div>
  );
};

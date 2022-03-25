import React from "react";
import styles from "./VideoCard.module.css";

export const VideoCard = ({ video }) => {
  const { alt, thumbnail, views, duration, title } = video;

  return (
    <div className={`${styles.card} p-1 m-1 rounded-sm`}>
      <div>
        <img
          alt={alt}
          src={thumbnail}
          className={`${styles.thumbnail} rounded-sm`}
        />
      </div>
      <div className="flex-row content-space-between my-1">
        <h3 className={`${styles.title}`}>{title}</h3>
        <button>
          <span className="material-icons-outlined ml-1">more_vert</span>
        </button>
      </div>
      <div className={`${styles.details} flex-row content-space-between`}>
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
  );
};

VideoCard.defaultProps = {
  video: {
    alt: "thumbnail",
    thumbnail: "",
    views: "0",
    duration: "0:00",
    title: "",
  },
};

import React from "react";
import { usePlaylist } from "../../contexts";
import styles from "./HorizontalCard.module.css";

export const HorizontalCard = ({ video, playlist }) => {
  const { playlistDispatch } = usePlaylist();
  const { _id, alt, thumbnail, views, duration, title } = video;

  const handleRemoveFromPlaylist = (_id) => {
    playlistDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { _id, playlist },
    });
  };

  return (
    <div className={`${styles.card} flex-row m-1 p-1 border rounded-sm`}>
      <div className="w-20">
        <img className="h-100 rounded-sm" src={thumbnail} alt={alt} />
      </div>

      <div className="flex-column py-1 px-2">
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

      <button
        onClick={() => handleRemoveFromPlaylist(_id)}
        className={`${styles.remove__btn} icon-container p-1 rounded-sm`}
      >
        <span className="material-icons-outlined mx-1">delete</span>
      </button>
    </div>
  );
};

HorizontalCard.defaultProps = {
  video: {
    _id: "",
    alt: "thumbnail",
    title: "",
    thumbnail: "",
    views: "0",
    duration: "0:00",
  },
  playlist: "",
};

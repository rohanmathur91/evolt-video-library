import React, { useState } from "react";
import { usePlaylist } from "../../contexts";
import { addToWatchLater } from "../../utils";
import styles from "./VideoCard.module.css";

export const VideoCard = ({ video, setClickedVideo }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { alt, thumbnail, views, duration, title, avatar, creatorName } = video;
  const { openModal, playlistDispatch } = usePlaylist();

  const handleAddToWatchLater = (video) => {
    setShowOptions(false);
    addToWatchLater(video, playlistDispatch);
  };

  const handleSaveToPlaylist = (video) => {
    openModal();
    setShowOptions(false);
    setClickedVideo(video);
  };

  return (
    <div className={`${styles.card} p-1 m-1 rounded-sm`}>
      <div>
        <img
          alt={alt}
          src={thumbnail}
          className={`${styles.thumbnail} rounded-sm`}
        />
      </div>

      <div className="flex-row">
        <div className={`${styles.avatar} m-1`}>
          <img className="rounded-full" src={avatar} alt="avatar" />
        </div>

        <div className="w-100">
          <div className="flex-row content-space-between items-start my-1 relative">
            <div>
              <h3 className={`${styles.title}`}>{title}</h3>
              <div className={`${styles.creator__name} text-sm mt-1`}>
                {creatorName}
              </div>
            </div>
            <button onClick={() => setShowOptions(true)}>
              <span className="material-icons-outlined ml-1">more_vert</span>
            </button>

            {showOptions && (
              <div
                className={`${styles.options} py-1 px-2 flex-row items-start border rounded-sm`}
              >
                <div>
                  <button
                    onClick={() => handleAddToWatchLater(video)}
                    className="text-sm flex-row items-center py-1"
                  >
                    <span className="material-icons-outlined text-base mr-1">
                      watch_later
                    </span>
                    Watch later
                  </button>
                  <button
                    onClick={() => handleSaveToPlaylist(video)}
                    className="text-sm flex-row items-center py-1"
                  >
                    <span className="material-icons-outlined text-base mr-1">
                      bookmark_border
                    </span>
                    Save to playlist
                  </button>
                </div>
                <button
                  onClick={() => setShowOptions(false)}
                  className={`${styles.close__btn} py-1`}
                >
                  <span className="material-icons-outlined text-base">
                    close
                  </span>
                </button>
              </div>
            )}
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
      </div>
    </div>
  );
};

VideoCard.defaultProps = {
  video: {
    alt: "thumbnail",
    title: "",
    thumbnail: "",
    avatar: "",
    views: "0",
    duration: "0:00",
    creatorName: "",
  },
};

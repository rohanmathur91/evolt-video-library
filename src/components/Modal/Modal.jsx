import React, { useState } from "react";
import styles from "./Modal.module.css";

export const Modal = () => {
  const [isWatchLater, setIsWatchLater] = useState(false);
  const [isSavedVideos, setIsSavedVideos] = useState(false);

  return (
    <div className={`${styles.modal__container} flex-row flex-center`}>
      <div className={`${styles.container} p-1 rounded-sm flex-column`}>
        <div
          className={`${styles.header} flex-row items-center content-space-between py-1 mx-1`}
        >
          <span className="text-base">Save to...</span>
          <button>
            <span class="material-icons-outlined">close</span>
          </button>
        </div>

        <div className="pt-1 px-1 flex-column">
          <label htmlFor="watch-later">
            <input
              type="checkbox"
              id="watch-later"
              className="my-1 mr-1"
              checked={isWatchLater}
            />{" "}
            Watch later
          </label>

          <label htmlFor="saved-videos">
            <input
              type="checkbox"
              id="saved-videos"
              className="my-1 mr-1"
              checked={isSavedVideos}
            />{" "}
            Saved Videos
          </label>
        </div>

        <button className="flex-row items-center content-space-between pb-1 mr-1">
          <span class={`${styles.add__icon} material-icons-outlined mr-1`}>
            add
          </span>
          <span className="text-base">Create a new playlist</span>
        </button>
      </div>
    </div>
  );
};

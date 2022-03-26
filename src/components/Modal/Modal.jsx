import React, { useReducer } from "react";
import { usePlaylist } from "../../contexts";
import { modalReducer } from "../../reducers";
import {
  addToWatchLater,
  removeFromWatchLater,
  isVideoInWatchLater,
  isVideoInPlaylist,
} from "../../utils";
import styles from "./Modal.module.css";

export const Modal = ({ video }) => {
  const [{ loading, showInput, newPlaylistName }, modalDispatch] = useReducer(
    modalReducer,
    {
      loading: false,
      showInput: false,
      newPlaylistName: "",
    }
  );
  const { closeModal, watchLater, playlists, playlistDispatch } = usePlaylist();
  const videoInWatchLater = isVideoInWatchLater(video._id, watchLater);

  const handleInputChange = (event) => {
    modalDispatch({
      type: "SET_NEW_PLAYLIST_NAME",
      payload: event.target.value,
    });
  };

  const handleWatchLaterChange = (event) => {
    if (event.target.checked) {
      addToWatchLater(video, playlistDispatch);
    } else {
      removeFromWatchLater(video._id, playlistDispatch);
    }
  };

  const handleShowInput = () => {
    modalDispatch({ type: "SHOW_INPUT", payload: true });
  };

  return (
    <div className={`${styles.modal__container} flex-row flex-center`}>
      <div className={`${styles.container} p-1 rounded-sm flex-column`}>
        <div
          className={`${styles.header} flex-row items-center content-space-between py-1 mx-1`}
        >
          <span className="text-base">Save to...</span>
          <button onClick={closeModal}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="pt-1 px-1 flex-column">
          <label className="cursor-pointer">
            <input
              type="checkbox"
              id="watch-later"
              checked={videoInWatchLater ?? false}
              onChange={handleWatchLaterChange}
              className="my-1 mr-2 cursor-pointer"
            />
            Watch later
          </label>

          <label className="cursor-pointer">
            <input
              type="checkbox"
              id="saved-videos"
              className="my-1 mr-2 cursor-pointer"
            />
            Liked Videos
          </label>
        </div>

        <button
          onClick={handleShowInput}
          className="flex-row items-center content-space-between pb-1 mt-1 mr-1"
        >
          <span className={`${styles.add__icon} material-icons-outlined mr-1`}>
            add
          </span>
          <span className="text-base">Create a new playlist</span>
        </button>
      </div>
    </div>
  );
};

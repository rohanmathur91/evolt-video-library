import React, { useReducer } from "react";
import { usePlaylist } from "../../contexts";
import { playlistModalReducer } from "../../reducers";
import { useToast } from "../../hooks";
import {
  createPlaylist,
  addVideoInPlaylist,
  removeFromPlaylist,
  addInLikeVideos,
  removeFromLikeVideos,
  addToWatchLater,
  removeFromWatchLater,
} from "../../services";
import {
  isVideoLiked,
  isVideoInWatchLater,
  isVideoInPlaylist,
} from "../../utils";
import { Modal } from "../";
import styles from "./PlaylistModal.module.css";

export const PlaylistModal = ({ video, handleShowModal }) => {
  const [{ loading, showInput, newPlaylistName }, playlistModalDispatch] =
    useReducer(playlistModalReducer, {
      loading: false,
      showInput: false,
      newPlaylistName: "",
    });
  const { showToast } = useToast();
  const { watchLater, likedVideos, playlists, playlistDispatch } =
    usePlaylist();
  const likedVideo = isVideoLiked(video._id, likedVideos);
  const videoInWatchLater = isVideoInWatchLater(video._id, watchLater);

  const handleInputChange = (event) => {
    playlistModalDispatch({
      type: "SET_NEW_PLAYLIST_NAME",
      payload: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createPlaylist(
      event,
      newPlaylistName,
      playlistModalDispatch,
      playlistDispatch
    );
  };

  const handleLikeClick = (event) => {
    if (event.target.checked) {
      addInLikeVideos(video, playlistDispatch, showToast);
    } else {
      removeFromLikeVideos(video._id, playlistDispatch, showToast);
    }
  };

  const handleWatchLaterChange = (event) => {
    if (event.target.checked) {
      addToWatchLater(video, playlistDispatch, showToast);
    } else {
      removeFromWatchLater(video._id, playlistDispatch, showToast);
    }
  };

  const handlePlaylistInputChange = (event, playlistId) => {
    if (event.target.checked) {
      addVideoInPlaylist(video, playlistId, playlistDispatch, showToast);
    } else {
      removeFromPlaylist(video._id, playlistDispatch, playlistId, showToast);
    }
  };

  const handleShowInput = () => {
    playlistModalDispatch({ type: "SHOW_INPUT", payload: true });
  };

  return (
    <Modal handleShowModal={handleShowModal}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={`${styles.container} p-1 m-1 rounded-sm flex-column`}
      >
        <div
          className={`${styles.header} flex-row items-center content-space-between py-1 mx-1`}
        >
          <span className="text-base">Save to...</span>
          <button onClick={() => handleShowModal(false)}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>

        <div className="pt-1 px-1 flex-column">
          <label className="cursor-pointer">
            <input
              type="checkbox"
              id="watch-later"
              checked={videoInWatchLater}
              onChange={handleWatchLaterChange}
              className="my-1 mr-2 cursor-pointer"
            />
            Watch later
          </label>

          <label className="cursor-pointer">
            <input
              type="checkbox"
              id="saved-videos"
              checked={likedVideo}
              onChange={handleLikeClick}
              className="my-1 mr-2 cursor-pointer"
            />
            Liked Videos
          </label>

          {playlists.map(({ _id, title }) => (
            <label key={_id} className="cursor-pointer">
              <input
                id={_id}
                type="checkbox"
                checked={isVideoInPlaylist(video._id, _id, playlists) ?? false}
                className="my-1 mr-2 cursor-pointer"
                onChange={(event) => handlePlaylistInputChange(event, _id)}
              />
              {title}
            </label>
          ))}
        </div>

        {showInput ? (
          <form onSubmit={handleFormSubmit} className="flex-column mt-1">
            <input
              required
              autoFocus
              type="text"
              value={newPlaylistName}
              onChange={handleInputChange}
              placeholder="Add new playlist.."
              className="border rounded-sm p-1 text-base mx-1"
            />
            <button
              disabled={loading}
              className={`${styles.btn} p-1 text-base`}
            >
              {loading ? "Create..." : "Create"}
            </button>
          </form>
        ) : (
          <button
            onClick={handleShowInput}
            className={`${styles.btn} flex-row items-center pb-1 mt-1 mr-1`}
          >
            <span
              className={`${styles.add__icon} material-icons-outlined mr-1`}
            >
              add
            </span>
            <span className="text-base">Create a new playlist</span>
          </button>
        )}
      </div>
    </Modal>
  );
};

PlaylistModal.defaultProps = {
  video: {
    _id: "",
    alt: "thumbnail",
    title: "",
    thumbnail: "",
    views: "0",
    duration: "0:00",
    description: "",
  },
  handleShowModal: () => {},
};

import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deletePlaylist, removeFromPlaylist } from "../../services";
import { usePlaylist } from "../../contexts";
import { useModal } from "../../hooks";
import { getPlaylistById } from "../../utils";
import { Modal, Sidebar, HorizontalCard } from "../";
import styles from "./PlaylistContainer.module.css";

export const PlaylistContainer = ({
  title,
  videoList,
  removeVideoHandler,
  deletePlaylistHandler,
}) => {
  const navigate = useNavigate();
  const { id: playlistId } = useParams();
  const { showModal, handleShowModal } = useModal();
  const { playlists, playlistDispatch } = usePlaylist();
  const playlist = getPlaylistById(playlistId, playlists);

  const handleRemoveFromPlaylist = (videoId) => {
    if (playlistId) {
      removeFromPlaylist(videoId, playlistDispatch, playlistId);
    } else {
      removeVideoHandler(videoId, playlistDispatch);
    }
  };

  const handleDeletePlaylist = () => {
    if (playlistId) {
      deletePlaylist(playlistId, playlistDispatch, navigate);
    } else {
      deletePlaylistHandler(playlistDispatch, navigate);
    }
  };

  return (
    <>
      {showModal && (
        <Modal handleShowModal={handleShowModal}>
          <div
            onClick={(event) => event.stopPropagation()}
            className={`${styles.modal} p-1 pl-2 m-1 rounded-sm flex-column`}
          >
            <div className="flex-row items-center content-space-between">
              <h3 className="sub-header">Are you sure ?</h3>
              <button
                onClick={() => handleShowModal(false)}
                className={`${styles.close__btn} icon-container p-1 rounded-sm`}
              >
                <span className="material-icons-outlined mx-1">close</span>
              </button>
            </div>
            <p className={`${styles.message} mb-3 pr-1 text-sm`}>
              This will clear all the videos from {title || playlist?.title}.
              You won't be able to retrieve it again.
            </p>
            <div className="ml-auto mr-1 pb-1">
              <button
                onClick={() => handleShowModal(false)}
                className="btn-outlined font-sm p-1 mr-1 rounded-sm font-semibold transition-2"
              >
                Cancel
              </button>
              <button
                className="btn-solid font-sm p-1 rounded-sm font-semibold transition-2"
                onClick={handleDeletePlaylist}
              >
                Clear All
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className="flex-row">
        <Sidebar />
        <div className="main__container w-100 mt-1 px-2">
          <div className={`${styles.container} mt-2 mx-1 mb-2 px-2`}>
            <Link
              to="/explore"
              className={`${styles.back__link} flex-row items-center mt-1`}
            >
              <span className="material-icons-outlined mr-1">arrow_back</span>
              Goto explore
            </Link>
            <header className="flex-row items-center content-space-between mt-2 w-100 py-1 pl-1 rounded-sm">
              <h2 className="text-lg">
                {title || playlist?.title}{" "}
                <span className={`${styles.videos__count} font-semibold`}>
                  . {playlist?.videos.length || videoList.length} videos
                </span>
              </h2>

              {(playlistId ||
                (title === "History" && videoList.length > 0)) && (
                <button
                  title="Delete"
                  onClick={() => handleShowModal(true)}
                  className={`${styles.delete__btn} icon-container p-1 rounded-sm transition-2`}
                >
                  <span className="material-icons-outlined mx-1">delete</span>
                </button>
              )}
            </header>

            <main className="flex-column items-center">
              {videoList.length ? (
                videoList.map((video) => (
                  <HorizontalCard
                    key={video._id}
                    video={video}
                    handleRemoveFromPlaylist={handleRemoveFromPlaylist}
                  />
                ))
              ) : playlist?.videos.length ? (
                playlist.videos.map((video) => (
                  <HorizontalCard
                    key={video._id}
                    video={video}
                    handleRemoveFromPlaylist={handleRemoveFromPlaylist}
                  />
                ))
              ) : (
                <p className="text-center mt-6">
                  There are no videos in this yet.{" "}
                  <Link
                    to="/explore"
                    className={`${styles.link} font-semibold`}
                  >
                    Explore all videos
                  </Link>
                </p>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

PlaylistContainer.defaultProps = {
  title: "",
  videoList: [],
  removeHandler: () => {},
  deleteHandler: () => {},
};

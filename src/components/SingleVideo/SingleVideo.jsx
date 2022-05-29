import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useModal, useDocumentTitle, useToast } from "../../hooks";
import { useAuth, usePlaylist } from "../../contexts";
import {
  addInLikeVideos,
  removeFromLikeVideos,
  addToWatchLater,
  removeFromWatchLater,
} from "../../services";
import {
  isVideoLiked,
  isVideoInHistory,
  isVideoInWatchLater,
} from "../../utils";
import { Loader, PlaylistModal } from "../";
import styles from "./SingleVideo.module.css";

export const SingleVideo = () => {
  const [video, setVideo] = useState(null);
  const [loader, setLoader] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { videoId } = useParams();
  const { showToast } = useToast();
  const { showModal, handleShowModal } = useModal();
  const { watchLater, likedVideos, history, playlistDispatch } = usePlaylist();
  const likedVideo = isVideoLiked(videoId, likedVideos);
  const videoInHistory = isVideoInHistory(videoId, history);
  const videoInWatchLater = isVideoInWatchLater(videoId, watchLater);
  const { _id, alt, views, duration, title, avatar, creatorName, description } =
    video ?? {};

  useDocumentTitle(title || "Video");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { video },
        } = await axios.get(`/api/video/${videoId}`);

        setVideo(video);
        setLoader(false);
      } catch (error) {
        showToast("error", "Could not load the video, try again later!");
      }
    })();
  }, [videoId, showToast]);

  useEffect(() => {
    if (user && video && !videoInHistory) {
      (async () => {
        try {
          await axios.post("/api/user/history", { video });

          playlistDispatch({ type: "ADD_TO_HISTORY", payload: video });
        } catch (error) {
          showToast("error", "Something went wrong!");
        }
      })();
    }
  }, [user, showToast, video, videoInHistory, playlistDispatch]);

  const handleLikeClick = () => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      if (!likedVideo) {
        addInLikeVideos(video, playlistDispatch, showToast);
      } else {
        removeFromLikeVideos(_id, playlistDispatch, showToast);
      }
    }
  };

  const handleSaveToPlaylist = () => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      handleShowModal(true);
    }
  };

  const handleWatchLaterClick = () => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      if (!videoInWatchLater) {
        addToWatchLater(video, playlistDispatch, showToast);
      } else {
        removeFromWatchLater(_id, playlistDispatch, showToast);
      }
    }
  };

  return (
    <>
      {showModal && (
        <PlaylistModal video={video} handleShowModal={handleShowModal} />
      )}
      {loader ? (
        <Loader />
      ) : (
        <div className="mb-2 p-2">
          <section className={`${styles.container}`}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
          <section>
            <h2 className={`${styles.title} sub-header my-2`}>{title}</h2>

            <div className="flex-row items-center mb-2 wrap">
              <div className="flex-row">
                <img
                  alt={alt}
                  src={avatar}
                  className={`${styles.avatar} rounded-full mr-2`}
                />

                <div className="flex-column content-space-between">
                  <p className="font-semibold">{creatorName}</p>
                  <div className="flex-row mt-auto">
                    <div className="text-base icon-container mr-4">
                      <span className="material-icons text-base mr-1">
                        visibility
                      </span>
                      <span className="text-sm">{views} views</span>
                    </div>

                    <div className="text-sm icon-container">
                      <span className="material-icons-outlined text-base mr-1">
                        timer
                      </span>
                      <span className="text-sm">{duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.video__options} flex-row my-2`}>
                <button
                  onClick={handleLikeClick}
                  className="icon-container mr-3 font-semibold"
                >
                  <span
                    className={`${
                      likedVideo ? "material-icons" : "material-icons-outlined"
                    } ${styles.video__icon}`}
                  >
                    thumb_up
                  </span>
                  {likedVideo ? "Liked" : "Like"}
                </button>

                <button
                  onClick={handleSaveToPlaylist}
                  className="icon-container mr-3 font-semibold"
                >
                  <span
                    className={`${styles.video__icon} material-icons-outlined`}
                  >
                    playlist_add
                  </span>
                  Save to playlist
                </button>

                <button
                  onClick={handleWatchLaterClick}
                  className="icon-container font-semibold"
                >
                  <span
                    className={`${styles.video__icon} material-icons-outlined`}
                  >
                    {videoInWatchLater ? "task_alt" : "watch_later"}
                  </span>
                  Watch later
                </button>
              </div>
            </div>
          </section>
          <p className={`${styles.description} text-sm mb-4`}>{description}</p>
        </div>
      )}
    </>
  );
};

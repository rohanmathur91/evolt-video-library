import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts";
import { addInLikeVideos, removeFromLikeVideos } from "../../services";
import { useModal } from "../../hooks";
import {
  addToWatchLater,
  removeFromWatchLater,
  isVideoInWatchLater,
  isVideoLiked,
} from "../../utils";
import { encodedToken } from "../../token";
import { PlaylistModal } from "../";
import styles from "./SingleVideo.module.css";

export const SingleVideo = () => {
  const [video, setVideo] = useState(null);
  const [loader, setLoader] = useState(false);
  const { videoId } = useParams();
  const { showModal, handleShowModal } = useModal();
  const { watchLater, likedVideos, playlistDispatch } = usePlaylist();
  const isLiked = isVideoLiked(videoId, likedVideos);
  const videoInWatchLater = isVideoInWatchLater(videoId, watchLater);
  const { _id, alt, views, duration, title, avatar, creatorName, description } =
    video ?? {};

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
        console.log(error);
      }
    })();
  }, [videoId]);

  useEffect(() => {
    (async () => {
      try {
        if (video) {
          await axios.post(
            "/api/user/history",
            { video },
            {
              headers: { authorization: encodedToken },
            }
          );

          playlistDispatch({ type: "ADD_TO_HISTORY", payload: video });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [video, playlistDispatch]);

  const handleLikeClick = () => {
    if (!isLiked) {
      addInLikeVideos(video, playlistDispatch);
    } else {
      removeFromLikeVideos(_id, playlistDispatch);
    }
  };

  const handleWatchLaterClick = () => {
    if (!videoInWatchLater) {
      addToWatchLater(video, playlistDispatch);
    } else {
      removeFromWatchLater(_id, playlistDispatch);
    }
  };

  return (
    <>
      {showModal && (
        <PlaylistModal video={video} handleShowModal={handleShowModal} />
      )}
      {loader ? (
        <p className="text-sm text-center mb-2 p-2">Fetching video...</p>
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
                      isLiked ? "material-icons" : "material-icons-outlined"
                    } mr-1`}
                  >
                    thumb_up
                  </span>
                  Like
                </button>

                <button
                  onClick={() => handleShowModal(true)}
                  className="icon-container mr-3 font-semibold"
                >
                  <span className="material-icons-outlined mr-1">
                    bookmark_border
                  </span>
                  Save to playlist
                </button>

                <button
                  onClick={handleWatchLaterClick}
                  className="icon-container font-semibold"
                >
                  <span className="material-icons-outlined mr-1">
                    {videoInWatchLater ? "task_alt" : "watch_later"}
                  </span>
                  Watch later
                </button>
              </div>
            </div>
          </section>
          <p className="text-sm mb-4">{description}</p>
        </div>
      )}
    </>
  );
};

import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast, useOutsideClick } from "../../hooks";
import { useAuth, usePlaylist } from "../../contexts";
import { addToWatchLater, removeFromWatchLater } from "../../services";
import { isVideoInWatchLater } from "../../utils";
import styles from "./VideoCard.module.css";

export const VideoCard = ({ video, setClickedVideo, handleShowModal }) => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const { playlistDispatch, watchLater } = usePlaylist();
  const videoInWatchLater = isVideoInWatchLater(video._id, watchLater);
  const { _id, alt, thumbnail, views, duration, title, avatar, creatorName } =
    video;

  useOutsideClick(optionsRef, showOptions, setShowOptions);

  const handleShowOptions = () => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      setShowOptions(true);
    }
  };

  const handleWatchLaterClick = () => {
    if (!videoInWatchLater) {
      addToWatchLater(video, playlistDispatch, showToast);
    } else {
      removeFromWatchLater(_id, playlistDispatch, showToast);
    }
    setShowOptions(false);
  };

  const handleSaveToPlaylist = () => {
    handleShowModal(true);
    setShowOptions(false);
    setClickedVideo(video);
  };

  return (
    <div className={`${styles.card} p-1 m-1 rounded-sm`}>
      <div className="cursor-pointer" onClick={() => navigate(`/video/${_id}`)}>
        <img
          alt={alt}
          src={thumbnail}
          className={`${styles.thumbnail} rounded-sm w-100`}
        />
      </div>

      <div className="flex-row mt-1">
        <div className={`${styles.avatar} m-1`}>
          <img className="rounded-full" src={avatar} alt="avatar" />
        </div>

        <div className="w-100">
          <div className="flex-row content-space-between items-start my-1 relative">
            <div>
              <h3 className={`${styles.title} text-ellipsis`}>{title}</h3>
              <div
                className={`${styles.creator__name} text-ellipsis text-sm mt-1`}
              >
                {creatorName}
              </div>
            </div>
            <button onClick={handleShowOptions}>
              <span className="material-icons-outlined ml-1">more_vert</span>
            </button>

            {showOptions && (
              <div
                ref={optionsRef}
                className={`${styles.options} py-1 px-2 flex-row items-start border rounded-sm`}
              >
                <div>
                  <button
                    onClick={handleWatchLaterClick}
                    className="text-sm flex-row items-center py-1"
                  >
                    <span className="material-icons-outlined text-base mr-1">
                      {videoInWatchLater ? "task_alt" : "watch_later"}
                    </span>
                    Watch Later
                  </button>
                  <button
                    onClick={handleSaveToPlaylist}
                    className="text-sm flex-row items-center py-1"
                  >
                    <span className="material-icons-outlined text-base mr-1">
                      playlist_add
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
  setClickedVideo: () => {},
  handleShowModal: () => {},
};

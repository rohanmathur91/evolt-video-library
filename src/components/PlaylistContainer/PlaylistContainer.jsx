import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deletePlaylist, removeFromPlaylist } from "../../services";
import { getPlaylistById, removeFromWatchLater } from "../../utils";
import { usePlaylist } from "../../contexts";
import { Sidebar, HorizontalCard } from "../";
import hero from "../../assets/images/hero.svg";
import styles from "./PlaylistContainer.module.css";

export const PlaylistContainer = ({ title, videoList }) => {
  const navigate = useNavigate();
  const { id: playlistId } = useParams();
  const { playlists, playlistDispatch } = usePlaylist();
  const playlist = getPlaylistById(playlistId, playlists);

  const handleRemoveFromPlaylist = (videoId) => {
    if (playlistId) {
      removeFromPlaylist(videoId, playlistDispatch, playlistId);
    } else {
      removeFromWatchLater(videoId, playlistDispatch);
    }
  };

  const handleDeletePlaylist = () => {
    deletePlaylist(playlistId, playlistDispatch, navigate);
  };

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <div className={`${styles.container} mt-4 px-2"`}>
          <div
            className={`${styles.playlist__info} mt-1 mx-1 flex-column items-center`}
          >
            <div className={`${styles.hero__image}`}>
              <img
                alt="hero"
                className="rounded-sm"
                src={
                  playlistId
                    ? !playlist?.videos.length
                      ? hero
                      : playlist?.videos[0].thumbnail
                    : !videoList.length
                    ? hero
                    : videoList[0].thumbnail
                }
              />
            </div>
            <div className="flex-row items-center content-space-between mt-2 border w-100 p-1 rounded-sm">
              <div className="text-base px-1">
                <h3 className="text-base">{title || playlist?.title}</h3>
                <div>{playlist?.videos.length || videoList.length} videos</div>
              </div>
              {playlistId && (
                <button
                  onClick={handleDeletePlaylist}
                  className={`${styles.remove__btn} icon-container p-1 rounded-sm`}
                >
                  <span className="material-icons-outlined mx-1">delete</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex-column items-center">
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
              <p className="text-center">
                There are no videos in this yet.{" "}
                <Link to="/explore" className={`${styles.link} font-semibold`}>
                  Explore all videos
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PlaylistContainer.defaultProps = { title: "", videoList: [] };

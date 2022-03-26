import React from "react";
import { useParams } from "react-router-dom";
import { removeFromPlaylist } from "../../services";
import { getPlaylistById, removeFromWatchLater } from "../../utils";
import { usePlaylist } from "../../contexts";
import { Sidebar, HorizontalCard } from "../";
import hero from "../../assets/images/hero.svg";
import styles from "./PlaylistContainer.module.css";

export const PlaylistContainer = ({ title, videoList }) => {
  const { id: playlistId } = useParams();
  const { playlists, playlistDispatch } = usePlaylist();
  const playlist = getPlaylistById(playlistId, playlists);

  const handleRemoveFromPlaylist = (videoId) => {
    if (playlistId) {
      removeFromPlaylist(videoId, playlistId, playlistDispatch);
    } else {
      removeFromWatchLater(videoId, playlistDispatch);
    }
  };

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <div className={`${styles.container} mt-4 px-2"`}>
          <div className="flex-column items-center">
            <div className="w-20 p-1">
              <img src={hero} alt="hero" />
            </div>
            <div className="mt-2">
              <h3 className="text-base">{title || playlist?.title}</h3>
              <div className="text-base">
                {playlist?.videos.length || videoList.length} videos
              </div>
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
              <p className="text-center">There are no videos in this yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PlaylistContainer.defaultProps = { title: "", videoList: [] };

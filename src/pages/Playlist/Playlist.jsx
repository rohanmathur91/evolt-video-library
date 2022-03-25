import React from "react";
import { HorizontalCard } from "../../components";
import { usePlaylist } from "../../contexts";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  const { watchLater } = usePlaylist();

  return (
    <div className="mt-4 px-2">
      <button className={`${styles.add__btn} icon-container p-1 rounded-sm`}>
        <span class="material-icons-outlined mr-1">playlist_add</span> Add new
        playlist
      </button>

      {/* TODO: remove later */}
      {watchLater.length ? (
        watchLater.map((video) => (
          <HorizontalCard key={video._id} video={video} playlist="watchLater" />
        ))
      ) : (
        <p className="my-2">There are no videos in this playlist yet</p>
      )}
    </div>
  );
};

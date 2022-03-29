import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import { usePlaylist } from "../../contexts";
import styles from "./Playlists.module.css";

export const Playlists = () => {
  const { playlists, likedVideos, watchLater } = usePlaylist();

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <div className="mt-4 px-2">
          <h3 className="m-1 text-center">All playlists</h3>
          <div className={`${styles.container}`}>
            <Link
              to="/liked-videos"
              title="View liked videos"
              className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1 flex-row items-center`}
            >
              Liked videos
              <span className={`${styles.video_count} text-sm`}>
                . {likedVideos.length} videos
              </span>
              <span class="material-icons-outlined ml-auto">open_in_new</span>
            </Link>
            <Link
              to="/watch-later"
              title="View watch later"
              className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1 flex-row items-center`}
            >
              Watch later
              <span className={`${styles.video_count} text-sm`}>
                . {watchLater.length} videos
              </span>
              <span class="material-icons-outlined ml-auto">open_in_new</span>
            </Link>
            {playlists.map(({ _id, title, videos }) => (
              <Link
                key={_id}
                to={`/playlist/${_id}`}
                title="View playlist"
                className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1 flex-row items-center`}
              >
                {title}
                <span className={`${styles.video_count} text-sm`}>
                  . {videos.length} videos
                </span>
                <span class="material-icons-outlined ml-auto">open_in_new</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

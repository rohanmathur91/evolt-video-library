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
              className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1`}
            >
              Liked videos{" "}
              <span className={`${styles.video_count} text-sm`}>
                . {likedVideos.length} videos
              </span>
            </Link>
            <Link
              to="/watch-later"
              className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1`}
            >
              Watch later{" "}
              <span className={`${styles.video_count} text-sm`}>
                . {watchLater.length} videos
              </span>
            </Link>
            {playlists.map(({ _id, title }) => (
              <Link
                key={_id}
                to={`/playlist/${_id}`}
                className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1`}
              >
                {title}{" "}
                <span className={`${styles.video_count} text-sm`}>
                  . {playlists.length} videos
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

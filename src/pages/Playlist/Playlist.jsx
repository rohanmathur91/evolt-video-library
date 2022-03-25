import React from "react";
import { Sidebar } from "../../components";
import { usePlaylist } from "../../contexts";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  // const { playlists = [{ _id: "sdsds", title: "dummy" }] } = usePlaylist();

  const playlists = [{ _id: "sdsds", title: "dummy" }];

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <div className="mt-4 px-2">
          <h3 className="m-1 text-center">All playlists</h3>
          <div className={`${styles.container}`}>
            <div
              className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1`}
            >
              Liked videos
            </div>
            <div
              className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1`}
            >
              Saved videos
            </div>
            {playlists.map(({ _id, title }) => (
              <div
                key={_id}
                className={`${styles.playlist__card} font-semibold p-3 text-base border rounded-sm m-1`}
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

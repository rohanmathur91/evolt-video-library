import React from "react";
import { Sidebar, VideoCard } from "../../components";
import { videos } from "../../staticData";
import styles from "./Videos.module.css";

export const Videos = () => {
  return (
    <div className={`${styles.videos} flex-row`}>
      <Sidebar />
      <div className={`${styles.videos__container} mt-3 px-2`}>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

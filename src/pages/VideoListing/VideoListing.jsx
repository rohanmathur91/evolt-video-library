import React from "react";
import { VideoCard } from "../../components";
import { videos } from "../../staticData";
import styles from "./VideoListing.module.css";

export const VideoListing = () => {
  return (
    <div className={`${styles.videos__container} mt-3 px-2`}>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

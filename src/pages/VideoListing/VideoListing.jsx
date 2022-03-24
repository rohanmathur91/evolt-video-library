import React from "react";
import { useVideo } from "../../contexts";
import { VideoCard, Categories } from "../../components";
import styles from "./VideoListing.module.css";

export const VideoListing = () => {
  const { videos } = useVideo();

  return (
    <>
      <Categories />
      <div className={`${styles.videos__container}`}>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </>
  );
};

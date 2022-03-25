import React from "react";
import { useVideo } from "../../contexts";
import { Sidebar, VideoCard, Categories } from "../../components";
import styles from "./VideoListing.module.css";

export const VideoListing = () => {
  const { videos } = useVideo();

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <Categories />
        <div className={`${styles.videos__container}`}>
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

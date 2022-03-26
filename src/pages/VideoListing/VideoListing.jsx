import React, { useState } from "react";
import { useVideo, usePlaylist } from "../../contexts";
import { Modal, Sidebar, VideoCard, Categories } from "../../components";
import styles from "./VideoListing.module.css";

export const VideoListing = () => {
  const [clickedVideo, setClickedVideo] = useState(null);
  const { videos } = useVideo();
  const { showModal } = usePlaylist();

  return (
    <>
      {showModal && <Modal video={clickedVideo} />}
      <div className="flex-row">
        <Sidebar />
        <div className="main__container w-100 mt-1 px-2">
          <Categories />
          <div className={`${styles.videos__container}`}>
            {videos.map((video) => (
              <VideoCard
                key={video._id}
                video={video}
                setClickedVideo={setClickedVideo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { useVideo } from "../../contexts";
import { useModal } from "../../hooks";
import {
  Sidebar,
  VideoCard,
  Categories,
  PlaylistModal,
} from "../../components";
import styles from "./VideoListing.module.css";

export const VideoListing = () => {
  const { showModal, handleShowModal } = useModal();
  const [clickedVideo, setClickedVideo] = useState(null);
  const { videos } = useVideo();

  return (
    <>
      {showModal && (
        <PlaylistModal video={clickedVideo} handleShowModal={handleShowModal} />
      )}
      <div className="flex-row">
        <Sidebar />
        <div className="main__container w-100 px-2">
          <Categories />
          <div className={`${styles.videos__container} mb-2`}>
            {videos.map((video) => (
              <VideoCard
                key={video._id}
                video={video}
                setClickedVideo={setClickedVideo}
                handleShowModal={handleShowModal}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

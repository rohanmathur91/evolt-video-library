import React, { useState } from "react";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
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
  const [clickedVideo, setClickedVideo] = useState(null);
  const { videos } = useVideo();
  const { showModal, handleShowModal } = useModal();

  useScrollToTop();
  useDocumentTitle("Explore");

  return (
    <>
      {showModal && (
        <PlaylistModal video={clickedVideo} handleShowModal={handleShowModal} />
      )}

      <div className="flex-row">
        <Sidebar />
        <div className="main__container w-100 px-2">
          <Categories />
          {videos.length ? (
            <main className={`${styles.videos__container} mb-2`}>
              {videos.map((video) => (
                <VideoCard
                  key={video._id}
                  video={video}
                  setClickedVideo={setClickedVideo}
                  handleShowModal={handleShowModal}
                />
              ))}
            </main>
          ) : (
            <p className="mt-4 text-center">No videos found.</p>
          )}
        </div>
      </div>
    </>
  );
};

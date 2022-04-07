import React, { useState } from "react";
import { useVideo } from "../../contexts";
import { useModal, useScrollToTop, useDocumentTitle } from "../../hooks";
import {
  Loader,
  Sidebar,
  VideoCard,
  PlaylistModal,
  CategoryChip,
} from "../../components";
import styles from "./VideoListing.module.css";

export const VideoListing = () => {
  const [clickedVideo, setClickedVideo] = useState(null);
  const { showModal, handleShowModal } = useModal();
  const { videos, loading, categories, currentCategory, videoDispatch } =
    useVideo();

  useScrollToTop();
  useDocumentTitle("Explore");

  const handleCategoryClick = (category) => {
    videoDispatch({ type: "SET_CURRENT_CATEGORY", payload: category });
  };

  return (
    <>
      {showModal && (
        <PlaylistModal video={clickedVideo} handleShowModal={handleShowModal} />
      )}

      <div className="flex-row">
        <Sidebar />
        <div className="main__container w-100 px-2">
          {loading ? (
            <Loader />
          ) : !videos.length ? (
            <p className="text-center font-semibold mt-6 py-6">
              No videos to show.
            </p>
          ) : (
            <>
              <div className="mb-2 mt-3 px-1 flex-row wrap">
                <CategoryChip
                  categoryName="All"
                  currentCategory={currentCategory}
                  handleClick={handleCategoryClick}
                />
                {categories.map(({ _id, categoryName }) => (
                  <CategoryChip
                    key={_id}
                    categoryName={categoryName}
                    currentCategory={currentCategory}
                    handleClick={handleCategoryClick}
                  />
                ))}
              </div>

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
            </>
          )}
        </div>
      </div>
    </>
  );
};

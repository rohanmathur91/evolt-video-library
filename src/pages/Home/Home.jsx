import React from "react";
import { useVideo } from "../../contexts";
import { Footer, VideoOverviewCard } from "../../components";
import styles from "./Home.module.css";

export const Home = () => {
  const { videos } = useVideo();

  return (
    <>
      <header className={`${styles.header}`}></header>
      <section className="mb-4 px-3">
        <h2 className="text-lg mt-2">Videos</h2>
        <div className={`${styles.videos} mt-1`}>
          {videos?.length ? (
            videos.slice(0, 4).map((video) => <VideoOverviewCard {...video} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

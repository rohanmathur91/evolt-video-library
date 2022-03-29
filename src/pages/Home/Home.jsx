import React from "react";
import { Link } from "react-router-dom";
import { useVideo } from "../../contexts";
import { Footer, VideoOverviewCard } from "../../components";
import styles from "./Home.module.css";

export const Home = () => {
  const { videos } = useVideo();

  return (
    <>
      <header className={`${styles.banner} flex-row flex-center`}>
        <section className="mx-2 flex-column items-center">
          <h1 className={`${styles.heading} mb-4`}>
            View quality reviews for your headphones.
          </h1>
          <Link
            to="/explore"
            className={`${styles.cta} py-2 px-4 text-sm transition-2 rounded-sm font-bold mt-1`}
          >
            Explore
          </Link>
        </section>
      </header>
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

import React from "react";
import styles from "./SingleVideo.module.css";

export const SingleVideo = ({ videoId }) => {
  return (
    <div className="main__container p-2">
      <section className={`${styles.video}`}>
        <iframe
          src={`https://www.youtube.com/embed/rbCGmC1J1x8`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section className={`${styles.details}`}>
        <div>title</div>
        <div className={`${styles.video__options}`}>
          <button className={`${styles.btn}`}>
            <span className="material-icons-outlined mr-2">thumb_up</span> Like
          </button>

          <button className={`${styles.btn}`}>
            <span className="material-icons-outlined mr-2">turned_in_not</span>{" "}
            Save to playlist
          </button>

          <button className={`${styles.btn}`}>
            <span className="material-icons-outlined mr-2">watch_later</span>
          </button>
        </div>
      </section>
      <section className={`${styles.description}`}>description</section>
    </div>
  );
};

SingleVideo.defaultProps = { videoId: "" };

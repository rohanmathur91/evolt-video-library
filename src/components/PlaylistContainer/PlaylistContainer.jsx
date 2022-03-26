import React from "react";
import { HorizontalCard } from "../HorizontalCard/HorizontalCard";
import hero from "../../assets/images/hero.svg";
import styles from "./PlaylistContainer.module.css";

export const PlaylistContainer = ({ title, videoList }) => {
  return (
    <div className={`${styles.container} mt-4 px-2"`}>
      <div className="flex-column items-center">
        <div className="w-20 p-1">
          <img src={hero} alt="hero" />
        </div>
        <div className="mt-2">
          <h3 className="text-base">{title}</h3>
          <div className="text-base">{videoList.length} videos</div>
        </div>
      </div>
      <div className="flex-column items-center">
        {videoList.length ? (
          videoList.map((video) => (
            <HorizontalCard key={video._id} video={video} playlist={title} />
          ))
        ) : (
          <p className="text-center">
            There are no videos in {title.toLowerCase()} yet
          </p>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components";
import { videos } from "../../staticData";
import styles from "./Videos.module.css";

export const Videos = () => {
  return (
    <div className="flex-row ">
      <aside className={`${styles.sidebar} mt-1 p-2`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
            >
              <span className="material-icons-outlined mr-2">home</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
            >
              <span className="material-icons-outlined mr-2">explore</span>
              Exlore
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/liked-videos"
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
            >
              <span className="material-icons-outlined mr-2">thumb_up</span>
              Liked videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlist"
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
            >
              <span className="material-icons-outlined mr-2">
                video_library
              </span>
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watch-later"
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
            >
              <span className="material-icons-outlined mr-2">
                bookmark_border
              </span>
              Watch later
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `${styles.sidebar__link} ${isActive ? styles.active__link : ""}`
              }
            >
              <span className="material-icons-outlined mr-2">history</span>
              History
            </NavLink>
          </li>
        </ul>
      </aside>
      <div className={`${styles.vides__container}`}></div>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

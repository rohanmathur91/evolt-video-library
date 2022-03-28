import React from "react";
import { Link } from "react-router-dom";
import styles from "./VideoOverviewCard.module.css";

export const VideoOverviewCard = ({
  _id,
  alt,
  title,
  thumbnail,
  avatar,
  creatorName,
}) => {
  return (
    <Link
      key={_id}
      to={`/video/${_id}`}
      className={`${styles.card} p-1 rounded-sm cursor-pointer`}
    >
      <img
        alt={alt}
        src={thumbnail}
        className={`${styles.thumbnail} rounded-sm`}
      />

      <div>
        <div className="flex-row mt-2 items-center">
          <img
            src={avatar}
            alt="avatar"
            className={`${styles.avatar}  rounded-full`}
          />

          <div className="ml-1">
            <h3 className={`${styles.title} text-ellipsis`}>{title}</h3>
            <div className={`${styles.creator__name} text-ellipsis text-sm`}>
              {creatorName}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

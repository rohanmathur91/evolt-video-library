import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HorizontalCard.module.css";

export const HorizontalCard = ({ video, handleRemoveFromPlaylist }) => {
  const navigate = useNavigate();
  const {
    _id,
    alt,
    thumbnail,
    views,
    duration,
    title,
    description,
    creatorName,
  } = video;

  return (
    <div className={`${styles.card} flex-row my-1 p-1 border rounded-sm`}>
      <div className={`${styles.container} flex-row cursor-pointer`}>
        <div
          className={`${styles.thumbnail}`}
          onClick={() => navigate(`/video/${_id}`)}
        >
          <img className="rounded-sm" src={thumbnail} alt={alt} />
        </div>

        <div className="flex-row">
          <div
            className="flex-column px-2 my-1"
            onClick={() => navigate(`/video/${_id}`)}
          >
            <p className={`${styles.creator__name}`}>{creatorName}</p>
            <h3 className={`${styles.title} sub-header text-ellipsis my-1`}>
              {title}
            </h3>
            <p className={`${styles.description} text-ellipsis text-sm`}>
              {description}
            </p>

            <div className={`${styles.details} flex-row pt-1`}>
              <div className="text-sm icon-container mr-3">
                <span className="material-icons text-sm">visibility</span>
                <span className={`${styles.views} text-ellipsis text-sm`}>
                  {views} views
                </span>
              </div>

              <div className="text-sm icon-container">
                <span className="material-icons-outlined text-sm">timer</span>
                <span className={`${styles.duration} text-sm`}>{duration}</span>
              </div>
            </div>
          </div>

          <button
            title="Remove"
            onClick={() => handleRemoveFromPlaylist(_id)}
            className={`${styles.remove__btn} icon-container p-1 rounded-sm`}
          >
            <span className="material-icons-outlined mx-1">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

HorizontalCard.defaultProps = {
  video: {
    _id: "",
    alt: "thumbnail",
    title: "",
    thumbnail: "",
    views: "0",
    description: "",
    duration: "0:00",
  },
  handleRemoveFromPlaylist: () => {},
};

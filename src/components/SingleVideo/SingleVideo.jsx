import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./SingleVideo.module.css";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const [loader, setLoader] = useState(false);
  const { alt, views, duration, title, avatar, creatorName, description } =
    video;

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { video },
        } = await axios.get(`/api/video/${videoId}`);

        setVideo(video);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

  return (
    <>
      {loader ? (
        <p className="text-sm text-center mb-2 p-2">Fetching video...</p>
      ) : (
        <div className="mb-2 p-2">
          <section className={`${styles.container}`}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
          <section>
            <h4 className={`${styles.title} my-2`}>{title}</h4>

            <div className="flex-row items-center mb-2 wrap">
              <div className="flex-row">
                <img
                  alt={alt}
                  src={avatar}
                  className={`${styles.avatar} rounded-full mr-2`}
                />

                <div className="flex-column content-space-between">
                  <p className="font-semibold">{creatorName}</p>
                  <div className="flex-row mt-auto">
                    <div className="text-base icon-container mr-4">
                      <span className="material-icons text-base mr-1">
                        visibility
                      </span>
                      <span className={` text-sm`}>{views} views</span>
                    </div>

                    <div className="text-sm icon-container">
                      <span className="material-icons-outlined text-base mr-1">
                        timer
                      </span>
                      <span className={`text-sm`}>{duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.video__options} flex-row my-2`}>
                <button className="icon-container mr-3 font-semibold">
                  <span className="material-icons-outlined mr-1">thumb_up</span>
                  Like
                </button>

                <button className="icon-container mr-3 font-semibold">
                  <span className="material-icons-outlined mr-1">
                    turned_in_not
                  </span>
                  Save to playlist
                </button>

                <button className="icon-container font-semibold">
                  <span className="material-icons-outlined mr-1">
                    watch_later
                  </span>
                  Watch later
                </button>
              </div>
            </div>
          </section>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </>
  );
};

SingleVideo.defaultProps = { videoId: "" };

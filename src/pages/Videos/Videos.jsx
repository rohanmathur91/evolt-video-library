import React from "react";
import { VideoCard } from "../../components";
import { videos } from "../../staticData";

export const Videos = () => {
  return (
    <>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </>
  );
};

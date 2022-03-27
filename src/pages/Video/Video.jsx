import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar, SingleVideo } from "../../components";

export const Video = () => {
  const { videoId } = useParams();

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <SingleVideo videoId={videoId} />
      </div>
    </div>
  );
};

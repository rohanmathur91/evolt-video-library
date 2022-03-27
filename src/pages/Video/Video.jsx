import React from "react";
import { useParams } from "react-router-dom";
import { SingleVideo } from "../../components";

export const Video = () => {
  const { videoId } = useParams();

  return <SingleVideo videoId={videoId} />;
};

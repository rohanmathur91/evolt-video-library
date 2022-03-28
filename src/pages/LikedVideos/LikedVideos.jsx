import React from "react";
import { usePlaylist } from "../../contexts";
import { removeFromLikeVideos } from "../../services";
import { PlaylistContainer } from "../../components";

export const LikedVideos = () => {
  const { likedVideos } = usePlaylist();

  return (
    <PlaylistContainer
      title={"Liked videos"}
      videoList={likedVideos}
      removeVideoHandler={removeFromLikeVideos}
    />
  );
};

import React from "react";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { usePlaylist } from "../../contexts";
import { removeFromLikeVideos } from "../../services";
import { PlaylistContainer } from "../../components";

export const LikedVideos = () => {
  const { likedVideos } = usePlaylist();
  useScrollToTop();
  useDocumentTitle("Like vidoes");

  return (
    <PlaylistContainer
      title={"Liked videos"}
      videoList={likedVideos}
      removeVideoHandler={removeFromLikeVideos}
    />
  );
};

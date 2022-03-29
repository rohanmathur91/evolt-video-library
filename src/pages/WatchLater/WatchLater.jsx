import React from "react";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { removeFromWatchLater } from "../../services";
import { PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";

export const WatchLater = () => {
  const { watchLater } = usePlaylist();

  useScrollToTop();
  useDocumentTitle("Watch later");

  return (
    <PlaylistContainer
      title="Watch later"
      videoList={watchLater}
      removeVideoHandler={removeFromWatchLater}
    />
  );
};

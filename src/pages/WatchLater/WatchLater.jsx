import React from "react";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";
import { removeFromWatchLater } from "../../utils";

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

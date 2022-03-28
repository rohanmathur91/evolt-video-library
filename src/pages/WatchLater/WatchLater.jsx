import React from "react";
import { PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";
import { removeFromWatchLater } from "../../utils";

export const WatchLater = () => {
  const { watchLater } = usePlaylist();

  return (
    <PlaylistContainer
      title="Watch later"
      videoList={watchLater}
      removeVideoHandler={removeFromWatchLater}
    />
  );
};

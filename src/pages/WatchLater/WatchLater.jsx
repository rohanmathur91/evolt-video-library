import React from "react";
import { PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";

export const WatchLater = () => {
  const { watchLater } = usePlaylist();

  return (
    <PlaylistContainer
      title="Watch later"
      playlist="watchLater"
      videoList={watchLater}
    />
  );
};

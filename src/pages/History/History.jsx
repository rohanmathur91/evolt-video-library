import React from "react";
import { PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";
import { removeFromHistory } from "../../utils";

export const History = () => {
  const { history } = usePlaylist();

  return (
    <PlaylistContainer
      title="History"
      videoList={history}
      removeVideoHandler={removeFromHistory}
    />
  );
};

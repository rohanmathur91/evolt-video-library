import React from "react";
import { removeFromHistory, clearAllHistory } from "../../services";
import { usePlaylist } from "../../contexts";
import { useModal } from "../../hooks";
import { PlaylistContainer } from "../../components";

export const History = () => {
  const { history } = usePlaylist();

  return (
    <PlaylistContainer
      title="History"
      videoList={history}
      removeVideoHandler={removeFromHistory}
      deletePlaylistHandler={clearAllHistory}
    />
  );
};

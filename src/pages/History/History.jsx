import React from "react";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { removeFromHistory, clearAllHistory } from "../../services";
import { usePlaylist } from "../../contexts";
import { PlaylistContainer } from "../../components";

export const History = () => {
  const { history } = usePlaylist();
  useScrollToTop();
  useDocumentTitle("History");

  return (
    <PlaylistContainer
      title="History"
      videoList={history}
      removeVideoHandler={removeFromHistory}
      deletePlaylistHandler={clearAllHistory}
    />
  );
};

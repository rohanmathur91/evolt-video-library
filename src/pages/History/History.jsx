import React from "react";
import { PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";

export const History = () => {
  const { history } = usePlaylist();

  return <PlaylistContainer title="History" videoList={history} />;
};

import React from "react";
import { Sidebar, PlaylistContainer } from "../../components";
import { usePlaylist } from "../../contexts";

export const WatchLater = () => {
  const { watchLater } = usePlaylist();

  return (
    <div className="flex-row">
      <Sidebar />
      <div className="main__container w-100 mt-1 px-2">
        <PlaylistContainer
          title="Watch later"
          playlist="watchLater"
          videoList={watchLater}
        />
      </div>
    </div>
  );
};

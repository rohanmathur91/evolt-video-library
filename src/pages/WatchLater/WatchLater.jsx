import React from "react";
import { HorizontalCard } from "../../components";
import { usePlaylist } from "../../contexts";

export const WatchLater = () => {
  const { watchLater } = usePlaylist();

  return (
    <div className="flex-column mt-4 px-2">
      {watchLater.length ? (
        watchLater.map((video) => (
          <HorizontalCard key={video._id} video={video} />
        ))
      ) : (
        <p className="text-center">No videos, watch-later is empty.</p>
      )}
    </div>
  );
};

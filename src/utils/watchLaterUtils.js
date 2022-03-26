export const addToWatchLater = (video, playlistDispatch) => {
  playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
};

export const removeFromWatchLater = (videoId, playlistDispatch) => {
  playlistDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: videoId });
};

export const isVideoInWatchLater = (videoId, watchLater) => {
  return watchLater.some(({ _id }) => _id === videoId);
};

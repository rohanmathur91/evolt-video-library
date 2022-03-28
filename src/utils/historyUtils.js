export const removeFromHistory = (videoId, playlistDispatch) => {
  playlistDispatch({ type: "REMOVE_FROM_HISTORY", payload: videoId });
};

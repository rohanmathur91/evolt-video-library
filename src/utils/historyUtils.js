export const removeFromHistory = (videoId, playlistDispatch) => {
  playlistDispatch({ type: "REMOVE_FROM_HISTORY", payload: videoId });
};

export const clearAllHistory = (playlistDispatch, navigate) => {
  navigate("/explore");
  playlistDispatch({ type: "CLEAR_ALL_HISTORY" });
};

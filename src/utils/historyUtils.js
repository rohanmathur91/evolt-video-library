export const isVideoInHistory = (videoId, history) => {
  return history.find(({ _id }) => _id === videoId);
};

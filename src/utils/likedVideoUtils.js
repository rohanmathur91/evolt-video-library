export const isVideoLiked = (videoId, likedVideos) => {
  return likedVideos.some(({ _id }) => _id === videoId);
};

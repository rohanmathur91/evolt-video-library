import axios from "axios";

export const removeFromLikeVideos = async (
  videoId,
  playlistDispatch,
  showToast
) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${videoId}`);

    playlistDispatch({ type: "UPDATE_LIKE_VIDEOS", payload: likes });
    showToast("success", "Video removed from liked videos");
  } catch (error) {
    showToast("success", "Could not remove the video");
  }
};

import axios from "axios";

export const addInLikeVideos = async (video, playlistDispatch, showToast) => {
  try {
    const {
      data: { likes },
    } = await axios.post(`/api/user/likes`, { video });

    playlistDispatch({ type: "UPDATE_LIKE_VIDEOS", payload: likes });
    showToast("success", "Video added in liked videos");
  } catch (error) {
    showToast("error", "Could not add in liked videos");
  }
};

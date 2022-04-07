import axios from "axios";

export const removeFromHistory = async (
  videoId,
  playlistDispatch,
  showToast
) => {
  try {
    await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    playlistDispatch({ type: "REMOVE_FROM_HISTORY", payload: videoId });
    showToast("success", "Video removed from history");
  } catch (error) {
    showToast("error", "Could not remove the video");
  }
};

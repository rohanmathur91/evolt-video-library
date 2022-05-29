import axios from "axios";

export const removeFromWatchLater = async (
  videoId,
  playlistDispatch,
  showToast
) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${videoId}`);

    playlistDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
    showToast("success", "Video removed from watch later");
  } catch (error) {
    showToast("error", "Something went wrong!");
  }
};

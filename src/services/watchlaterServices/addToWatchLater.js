import axios from "axios";

export const addToWatchLater = async (video, playlistDispatch, showToast) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      `/api/user/watchlater`,
      { video },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    playlistDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
    showToast("success", "Video added to watch later");
  } catch (error) {
    showToast("error", "Something went wrong!");
  }
};

import axios from "axios";

export const clearAllHistory = async (
  playlistDispatch,
  navigate,
  showToast
) => {
  try {
    await axios.delete("/api/user/history/all", {
      headers: { authorization: localStorage.getItem("token") },
    });

    navigate("/explore");
    playlistDispatch({ type: "CLEAR_ALL_HISTORY" });
    showToast("success", "History cleared successfully");
  } catch (error) {
    showToast("error", "Could not clear the history");
  }
};

import axios from "axios";

export const clearAllHistory = async (
  playlistDispatch,
  navigate,
  showToast
) => {
  try {
    await axios.delete("/api/user/history/all");

    playlistDispatch({ type: "CLEAR_ALL_HISTORY" });
    navigate("/explore");
    showToast("success", "History cleared successfully");
  } catch (error) {
    showToast("error", "Could not clear the history");
  }
};

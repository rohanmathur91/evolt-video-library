import axios from "axios";
import { encodedToken } from "../../token";

export const clearAllHistory = async (
  playlistDispatch,
  navigate,
  showToast
) => {
  try {
    await axios.delete("/api/user/history/all", {
      headers: { authorization: encodedToken },
    });

    navigate("/explore");
    playlistDispatch({ type: "CLEAR_ALL_HISTORY" });
    showToast("success", "History cleared successfully");
  } catch (error) {
    showToast("error", "Could not clear the history");
  }
};

import axios from "axios";
import { encodedToken } from "../../token";

export const deletePlaylist = async (
  playlistId,
  playlistDispatch,
  navigate,
  showToast
) => {
  try {
    await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: encodedToken },
    });

    navigate("/playlists");
    playlistDispatch({ type: "DELETE_PLAYLIST", payload: playlistId });
    showToast("success", "Playlist deleted successfully.");
  } catch (error) {
    showToast("error", "Something went wrong!");
  }
};

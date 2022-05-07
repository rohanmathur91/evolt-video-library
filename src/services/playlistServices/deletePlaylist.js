import axios from "axios";

export const deletePlaylist = async (
  playlistId,
  playlistDispatch,
  navigate,
  showToast
) => {
  try {
    await axios.delete(`/api/user/playlists/${playlistId}`);

    navigate("/playlists");
    playlistDispatch({ type: "DELETE_PLAYLIST", payload: playlistId });
    showToast("success", "Playlist deleted successfully.");
  } catch (error) {
    showToast("error", "Something went wrong!");
  }
};

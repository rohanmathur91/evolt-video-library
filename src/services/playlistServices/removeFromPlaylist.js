import axios from "axios";

export const removeFromPlaylist = async (
  videoId,
  playlistDispatch,
  playlistId,
  showToast
) => {
  try {
    await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    playlistDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { videoId, playlistId },
    });

    showToast("success", "Video removed from playlist");
  } catch (error) {
    showToast("error", "Could not remove the video from playlist");
  }
};

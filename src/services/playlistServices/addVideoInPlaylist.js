import axios from "axios";

export const addVideoInPlaylist = async (
  video,
  playlistId,
  playlistDispatch,
  showToast
) => {
  try {
    await axios.post(`/api/user/playlists/${playlistId}`, { video });

    playlistDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { video, playlistId },
    });
    showToast("success", "Video added in playlist");
  } catch (error) {
    showToast("error", "Could not add the video in playlist");
  }
};

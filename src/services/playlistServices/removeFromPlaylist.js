import axios from "axios";
import { encodedToken } from "../../token";

export const removeFromPlaylist = async (
  videoId,
  playlistDispatch,
  playlistId
) => {
  try {
    await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: encodedToken },
    });

    playlistDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { videoId, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};

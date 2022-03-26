import axios from "axios";
import { encodedToken } from "../../token";

export const removeFromPlaylist = async (
  videoId,
  playlistId,
  playlistDispatch
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization: encodedToken },
      }
    );

    console.log("from service::", data);
    playlistDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { videoId, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};

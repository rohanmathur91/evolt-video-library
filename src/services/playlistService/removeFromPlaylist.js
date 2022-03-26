import axios from "axios";
import { encodedToken } from "../../token";

export const removeFromPlaylist = async (
  video,
  playlistId,
  playlistDispatch
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );

    console.log(data);
    playlistDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { videoId: video._id, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};

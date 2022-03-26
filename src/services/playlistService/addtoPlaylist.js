import axios from "axios";
import { encodedToken } from "../../token";

export const addToPlaylist = async (video, playlistId, playlistDispatch) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );

    playlistDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { video, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};

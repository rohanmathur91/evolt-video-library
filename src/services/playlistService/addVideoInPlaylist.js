import axios from "axios";
import { encodedToken } from "../../token";

export const addVideoInPlaylist = async (
  video,
  playlistId,
  playlistDispatch
) => {
  try {
    await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );

    playlistDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { video, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};

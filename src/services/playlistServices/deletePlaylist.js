import axios from "axios";
import { encodedToken } from "../../token";

export const deletePlaylist = async (
  playlistId,
  playlistDispatch,
  navigate
) => {
  try {
    await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: encodedToken },
    });

    navigate("/playlists");
    playlistDispatch({ type: "DELETE_PLAYLIST", payload: playlistId });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import { encodedToken } from "../../token";

export const createPlaylist = async (
  event,
  newPlaylistName,
  modalDispatch,
  playlistDispatch
) => {
  event.preventDefault();
  try {
    modalDispatch({ type: "LOADING", payload: true });
    const {
      data: { playlists },
    } = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: newPlaylistName },
      },
      {
        headers: { authorization: encodedToken },
      }
    );

    playlistDispatch({ type: "SET_PLAYLIST", payload: playlists });
    modalDispatch({ type: "RESET_MODAL_STATES" });
  } catch (error) {
    console.log(error);
  }
};

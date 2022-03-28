import axios from "axios";
import { encodedToken } from "../../token";

export const removeFromHistory = async (videoId, playlistDispatch) => {
  try {
    await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: encodedToken },
    });

    playlistDispatch({ type: "REMOVE_FROM_HISTORY", payload: videoId });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import { encodedToken } from "../../token";

export const removeFromWatchLater = async (videoId, playlistDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: encodedToken },
    });

    playlistDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import { encodedToken } from "../../token";

export const addToWatchLater = async (video, playlistDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      `/api/user/watchlater`,
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );

    playlistDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
  } catch (error) {
    console.log(error);
  }
};

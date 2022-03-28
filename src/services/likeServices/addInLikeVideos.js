import axios from "axios";
import { encodedToken } from "../../token";

export const addInLikeVideos = async (video, playlistDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      `/api/user/likes`,
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );

    playlistDispatch({ type: "UPDATE_LIKE_VIDEOS", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import { encodedToken } from "../../token";

export const addInLikeVideos = async (video, playlistDispatch) => {
  try {
    const {
      data: { videos },
    } = await axios.post(
      `/api/user/likes`,
      { video },
      {
        headers: { authorization: encodedToken },
      }
    );

    playlistDispatch({ type: "UPDATE_LIKE_VIDEOS", payload: videos });
  } catch (error) {}
};

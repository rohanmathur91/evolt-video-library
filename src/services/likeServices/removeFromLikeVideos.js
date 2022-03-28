import axios from "axios";
import { encodedToken } from "../../token";

export const removeFromLikeVideos = async (videoId, playlistDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: encodedToken },
    });

    playlistDispatch({ type: "UPDATE_LIKE_VIDEOS", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

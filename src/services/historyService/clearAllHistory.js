import axios from "axios";
import { encodedToken } from "../../token";

export const clearAllHistory = async (playlistDispatch, navigate) => {
  try {
    await axios.delete("/api/user/history/all", {
      headers: { authorization: encodedToken },
    });

    navigate("/explore");
    playlistDispatch({ type: "CLEAR_ALL_HISTORY" });
  } catch (error) {
    console.log(error);
  }
};

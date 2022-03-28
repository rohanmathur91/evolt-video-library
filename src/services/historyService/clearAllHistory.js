import axios from "axios";
import { encodedToken } from "../../token";

export const clearAllHistory = (playlistDispatch, navigate) => {
  navigate("/explore");
  playlistDispatch({ type: "CLEAR_ALL_HISTORY" });
};

import axios from "axios";

export const signupService = async (
  credentials,
  updateUser,
  playlistDispatch,
  authFormDispatch,
  errorDispatch,
  navigate
) => {
  try {
    authFormDispatch({ type: "SET_LOADING", payload: true });
    errorDispatch({ type: "SET_SIGNUP_FORM_ERROR", payload: "" });
    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", credentials);

    updateUser(createdUser);

    const { history, watchlater, playlists, likes } = createdUser;
    playlistDispatch({
      type: "INITIALIZE_USER_VIDEOS",
      payload: {
        history,
        playlists,
        likedVideos: likes,
        watchLater: watchlater,
      },
    });

    localStorage.setItem("token", encodedToken);
    errorDispatch({ type: "CLEAR_SIGNUP_FORM" });
    authFormDispatch({ type: "SET_LOADING", payload: false });
    navigate("/");
  } catch (error) {
    errorDispatch({
      type: "SET_SIGNUP_FORM_ERROR",
      payload:
        error.response.status === 422
          ? "Email already exist."
          : "Something is wrong, please try later.",
    });
    authFormDispatch({ type: "SET_LOADING", payload: false });
  }
};

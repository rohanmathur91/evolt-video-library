import axios from "axios";

export const signupService = async (
  credentials,
  updateUser,
  playlistDispatch,
  authFormDispatch,
  errorDispatch,
  navigate,
  showToast
) => {
  try {
    authFormDispatch({ type: "SET_LOADING", payload: true });
    errorDispatch({ type: "SET_SIGNUP_FORM_ERROR", payload: "" });
    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", credentials);
    axios.defaults.headers.common["authorization"] = encodedToken;

    updateUser(createdUser);
    errorDispatch({ type: "CLEAR_SIGNUP_FORM" });
    authFormDispatch({ type: "SET_LOADING", payload: false });

    const { email, fullName, history, watchlater, playlists, likes } =
      createdUser;
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
    localStorage.setItem(
      "evolt-prime-user",
      JSON.stringify({ email, fullName })
    );

    navigate("/");
    showToast("success", "You signup is successfull.");
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

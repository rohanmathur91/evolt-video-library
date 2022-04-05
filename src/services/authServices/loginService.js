import axios from "axios";

export const loginService = async (
  credentials,
  updateUser,
  playlistDispatch,
  authFormDispatch,
  setError,
  navigate,
  showToast
) => {
  try {
    setError("");
    authFormDispatch({ type: "SET_LOADING", payload: true });
    const {
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", credentials);

    updateUser(foundUser);

    const { history, watchlater, playlists, likes } = foundUser;
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
    authFormDispatch({ type: "SET_LOADING", payload: false });
    navigate("/");
    showToast("success", "You logged in successfully");
  } catch (error) {
    setError("Email or password is incorrect");
  }
};

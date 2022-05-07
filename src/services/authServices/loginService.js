import axios from "axios";

export const loginService = async (
  location,
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
    axios.defaults.headers.common["authorization"] = encodedToken;

    updateUser(foundUser);
    authFormDispatch({ type: "SET_LOADING", payload: false });

    const { email, fullName, history, watchlater, playlists, likes } =
      foundUser;
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
    navigate(location.state?.from?.pathname ?? "/", { replace: true });
    showToast("success", "You logged in successfully");
  } catch (error) {
    setError("Email or password is incorrect");
  }
};

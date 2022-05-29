import axios from "axios";
import { useEffect, useContext, createContext, useReducer } from "react";
import { useAuth } from "./auth-context";
import { useToast } from "../hooks";
import { playlistReducer } from "../reducers";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{ history, likedVideos, watchLater, playlists }, playlistDispatch] =
    useReducer(playlistReducer, {
      history: [],
      watchLater: [],
      playlists: [],
      likedVideos: [],
    });
  const { user } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    if (!user) {
      playlistDispatch({ type: "CLEAR_ALL_USER_VIDEOS" });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const {
            data: { playlists },
          } = await axios.get("/api/user/playlists");

          playlistDispatch({ type: "SET_PLAYLIST", payload: playlists });
        } catch (error) {
          showToast("error", "Could not fetch the playlists.");
        }
      })();
    }
  }, [user, showToast]);

  return (
    <PlaylistContext.Provider
      value={{
        history,
        watchLater,
        playlists,
        likedVideos,
        playlistDispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };

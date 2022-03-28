import axios from "axios";
import { useEffect, useContext, createContext, useReducer } from "react";
import { playlistReducer } from "../reducers";
import { encodedToken } from "../token";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{ history, likedVideos, watchLater, playlists }, playlistDispatch] =
    useReducer(playlistReducer, {
      history: [],
      watchLater: [],
      playlists: [],
      likedVideos: [],
    });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { playlists },
        } = await axios.get("/api/user/playlists", {
          headers: { authorization: encodedToken },
        });

        playlistDispatch({ type: "SET_PLAYLIST", payload: playlists });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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

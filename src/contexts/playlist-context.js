import axios from "axios";
import { useEffect, useContext, createContext, useReducer } from "react";
import { playlistReducer } from "../reducers";
import { encodedToken } from "../token";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [
    { liked, history, watchLater, playlists, showModal },
    playlistDispatch,
  ] = useReducer(playlistReducer, {
    liked: [],
    history: [],
    watchLater: [],
    playlists: [],
    showModal: false,
  });

  const openModal = () => {
    playlistDispatch({ type: "HANDLE_MODAL", payload: true });
  };

  const closeModal = () => {
    playlistDispatch({ type: "HANDLE_MODAL", payload: false });
  };

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
        liked,
        history,
        watchLater,
        playlists,
        showModal,
        openModal,
        closeModal,
        playlistDispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };

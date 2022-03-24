import { useContext, createContext, useReducer } from "react";

const PlaylistContext = createContext();

const playlistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...playlistState,
        [payload.playlist]: [payload.video, ...playlistState[payload.playlist]],
      };

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...playlistState,
        [payload.playlist]: playlistState[payload.playlist].filter(
          ({ _id }) => _id !== payload._id
        ),
      };

    default:
      return playlistState;
  }
};

const PlaylistProvider = ({ children }) => {
  const [{ saved, liked, watchLater }, playlistDispatch] = useReducer(
    playlistReducer,
    {
      saved: [],
      liked: [],
      watchLater: [],
      userPlaylist: {},
    }
  );

  console.log(watchLater);

  return (
    <PlaylistContext.Provider
      value={{ saved, liked, watchLater, playlistDispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };

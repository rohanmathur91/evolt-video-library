export const playlistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "SET_PLAYLIST":
      return { ...playlistState, playlists: payload };

    case "ADD_TO_WATCH_LATER":
      return !playlistState.watchLater.some(({ _id }) => _id === payload._id)
        ? {
            ...playlistState,
            watchLater: playlistState.watchLater.concat(payload),
          }
        : playlistState;

    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...playlistState,
        watchLater: playlistState.watchLater.filter(
          ({ _id }) => _id !== payload
        ),
      };

    case "HANDLE_MODAL":
      return { ...playlistState, showModal: payload };

    default:
      return playlistState;
  }
};

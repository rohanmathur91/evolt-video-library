export const playlistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_PLAYLIST":
      return !playlistState[payload.playlist].some(
        ({ _id }) => _id === payload.video._id
      )
        ? {
            ...playlistState,
            [payload.playlist]: [
              payload.video,
              ...playlistState[payload.playlist],
            ],
          }
        : playlistState;

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...playlistState,
        [payload.playlist]: playlistState[payload.playlist].filter(
          ({ _id }) => _id !== payload._id
        ),
      };

    case "SET_PLAYLIST":
      return { ...playlistState, playlists: payload };

    case "HANDLE_MODAL":
      return { ...playlistState, showModal: payload };

    default:
      return playlistState;
  }
};

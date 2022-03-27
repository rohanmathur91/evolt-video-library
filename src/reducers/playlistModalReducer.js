export const playlistModalReducer = (playlistModalState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...playlistModalState, loading: payload };

    case "SHOW_INPUT":
      return { ...playlistModalState, showInput: payload };

    case "SET_NEW_PLAYLIST_NAME":
      return { ...playlistModalState, newPlaylistName: payload };

    case "RESET_MODAL_STATES":
      return {
        ...playlistModalState,
        loading: false,
        showInput: false,
        newPlaylistName: "",
      };

    default:
      return playlistModalState;
  }
};

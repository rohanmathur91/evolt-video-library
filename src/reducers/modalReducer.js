export const modalReducer = (modalState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...modalState, loading: payload };

    case "SHOW_INPUT":
      return { ...modalState, showInput: payload };

    case "SET_NEW_PLAYLIST_NAME":
      return { ...modalState, newPlaylistName: payload };

    case "RESET_MODAL_STATES":
      return {
        ...modalState,
        loading: false,
        showInput: false,
        newPlaylistName: "",
      };

    default:
      return modalState;
  }
};

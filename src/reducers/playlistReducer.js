export const playlistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_USER_VIDEOS":
      return { ...playlistState, ...payload };

    case "SET_PLAYLIST":
      return { ...playlistState, playlists: payload };

    case "UPDATE_WATCH_LATER":
      return { ...playlistState, watchLater: [...payload] };

    case "UPDATE_LIKE_VIDEOS":
      return { ...playlistState, likedVideos: [...payload] };

    case "ADD_TO_HISTORY":
      return {
        ...playlistState,
        history: playlistState.history.concat(payload).reverse(),
      };

    case "REMOVE_FROM_HISTORY":
      return {
        ...playlistState,
        history: playlistState.history.filter(({ _id }) => _id !== payload),
      };

    case "CLEAR_ALL_HISTORY":
      return {
        ...playlistState,
        history: [],
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistState.playlists.map((playlist) =>
          playlist._id === payload.playlistId
            ? { ...playlist, videos: playlist.videos.concat(payload.video) }
            : playlist
        ),
      };

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistState.playlists.map((playlist) =>
          playlist._id === payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video._id !== payload.videoId
                ),
              }
            : playlist
        ),
      };

    case "DELETE_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistState.playlists.filter(({ _id }) => _id !== payload),
      };

    case "CLEAR_ALL_USER_VIDEOS":
      return {
        ...playlistState,
        history: [],
        watchLater: [],
        playlists: [],
        likedVideos: [],
      };

    case "HANDLE_MODAL":
      return { ...playlistState, showModal: payload };

    default:
      throw new Error("Action type not found");
  }
};

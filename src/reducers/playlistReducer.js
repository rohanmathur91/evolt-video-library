export const playlistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "SET_PLAYLIST":
      return { ...playlistState, playlists: payload };

    case "ADD_TO_SAVED":
      return { ...playlistState, saved: payload };

    case "REMOVE_FROM_SAVED":
      return {
        ...playlistState,
        watchLater: playlistState.saved.filter(({ _id }) => _id !== payload),
      };

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

    case "ADD_TO_LIKED":
      return { ...playlistState, liked: playlistState.liked.concat(payload) };

    case "REMOVE_FROM_LIKED":
      return {
        ...playlistState,
        watchLater: playlistState.liked.filter(({ _id }) => _id !== payload),
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

    case "UPDATE_CURRENT_PLAYLIST":
      return { ...playlistState, currentPlaylist: payload };

    case "HANDLE_MODAL":
      return { ...playlistState, showModal: payload };

    default:
      return playlistState;
  }
};

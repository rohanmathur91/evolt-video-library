/**
 * This function will first find the playlist and then
 * inside that playlist it will check for the video
 *
 * @param  {string} videoId
 * @param  {string} playlistId
 * @param  {array} playlists
 * @returns  {boolean} video in playlist
 */

export const isVideoInPlaylist = (videoId, playlistId, playlists) => {
  return playlists
    .find(({ _id }) => _id === playlistId)
    ?.videos.some(({ _id }) => _id === videoId);
};

export const getPlaylistById = (playlistId, playlists) => {
  return playlists.find(({ _id }) => _id === playlistId);
};

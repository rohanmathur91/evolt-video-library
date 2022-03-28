export const getSearchedVideos = (videos, searchQuery) => {
  return videos.filter(({ title }) =>
    searchQuery ? title.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );
};

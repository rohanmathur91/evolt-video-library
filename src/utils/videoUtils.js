export const getVideosByCategory = (videos, currentCategory) => {
  return videos.filter(({ category }) =>
    currentCategory ? category === currentCategory : true
  );
};

export const getSearchedVideos = (videos, searchQuery) => {
  return videos.filter(({ title }) =>
    searchQuery ? title.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );
};

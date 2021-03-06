export const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "SET_LOADING":
      return { ...videoState, loading: payload };

    case "INITIALIZE_VIDEOS":
      return { ...videoState, videos: payload };

    case "INITIALIZE_CATEGORIES":
      return { ...videoState, categories: payload };

    case "SET_SEARCH_QUERY":
      return { ...videoState, searchQuery: payload };

    case "SET_CURRENT_CATEGORY":
      return { ...videoState, currentCategory: payload };

    default:
      throw new Error("Action type not found");
  }
};

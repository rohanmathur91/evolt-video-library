export const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_VIDEOS":
      return { ...videoState, videos: payload };

    case "INITIALIZE_CATEGORIES":
      return { ...videoState, categories: payload };

    default:
      return videoState;
  }
};

import axios from "axios";
import { useReducer, useEffect, useContext, createContext } from "react";

const VideoContext = createContext();

const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_VIDEOS":
      return { ...videoState, videos: payload };

    case "INITIALIZE_CATEGORIES":
      return { ...videoState, categories: payload };

    default:
      return videoState;
  }
};

const VideoProvider = ({ children }) => {
  const [{ videos, categories }, videoDispatch] = useReducer(videoReducer, {
    videos: [],
    categories: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");

        videoDispatch({ type: "INITIALIZE_VIDEOS", payload: videos });

        const {
          data: { categories },
        } = await axios.get("/api/categories");

        videoDispatch({ type: "INITIALIZE_CATEGORIES", payload: categories });
      } catch (error) {
        toast.error("Something went wrong!");
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, categories, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };

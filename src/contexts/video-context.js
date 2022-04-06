import { useReducer, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useToast } from "../hooks";
import { videoReducer } from "../reducers";
import { getSearchedVideos, getVideosByCategory } from "../utils";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [
    { videos, loading, categories, searchQuery, currentCategory },
    videoDispatch,
  ] = useReducer(videoReducer, {
    videos: [],
    categories: [],
    searchQuery: "",
    currentCategory: "All",
    loading: false,
  });
  const { showToast } = useToast();

  useEffect(() => {
    (async () => {
      videoDispatch({ type: "SET_LOADING", payload: true });
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");

        videoDispatch({ type: "INITIALIZE_VIDEOS", payload: videos });

        const {
          data: { categories },
        } = await axios.get("/api/categories");

        videoDispatch({ type: "INITIALIZE_CATEGORIES", payload: categories });
        videoDispatch({ type: "SET_LOADING", payload: false });
      } catch (error) {
        showToast("error", "Something went wrong!");
      }
    })();
  }, []);

  const videosByCategory = getVideosByCategory(videos, currentCategory);
  const filteredVideos = getSearchedVideos(videosByCategory, searchQuery);

  return (
    <VideoContext.Provider
      value={{
        loading,
        categories,
        searchQuery,
        currentCategory,
        videoDispatch,
        videos: filteredVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };

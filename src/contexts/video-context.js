import axios from "axios";
import { useReducer, useEffect, useContext, createContext } from "react";
import { useToast } from "../hooks";
import { videoReducer } from "../reducers";
import { getSearchedVideos, getVideosByCategory } from "../utils";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ videos, categories, searchQuery, currentCategory }, videoDispatch] =
    useReducer(videoReducer, {
      videos: [],
      categories: [],
      searchQuery: "",
      currentCategory: "All",
    });
  const { showToast } = useToast();

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
        showToast("error", "Could not able to fetch categories!");
      }
    })();
  }, []);

  const videosByCategory = getVideosByCategory(videos, currentCategory);
  const filteredVideos = getSearchedVideos(videosByCategory, searchQuery);

  return (
    <VideoContext.Provider
      value={{
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

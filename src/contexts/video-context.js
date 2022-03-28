import axios from "axios";
import { useReducer, useEffect, useContext, createContext } from "react";
import { getSearchedVideos } from "../utils";
import { videoReducer } from "../reducers";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ videos, categories, searchQuery, currentCategory }, videoDispatch] =
    useReducer(videoReducer, {
      videos: [],
      categories: [],
      currentCategory: "All",
      searchQuery: "",
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
        console.log("Something went wrong!");
      }
    })();
  }, []);

  const filteredVideos = getSearchedVideos(videos, searchQuery);

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

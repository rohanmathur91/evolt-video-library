import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts";
import {
  Home,
  Login,
  Signup,
  Profile,
  Playlists,
  History,
  WatchLater,
  VideoDetails,
  VideoListing,
  LikedVideos,
} from "./pages";
import { Navbar, PlaylistContainer } from "./components";

import "./App.css";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/history" element={<History />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlist/:id" element={<PlaylistContainer />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </div>
  );
};

export default App;

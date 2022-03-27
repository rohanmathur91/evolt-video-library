import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Video,
  Playlists,
  History,
  WatchLater,
  VideoListing,
} from "./pages";
import { Navbar, PlaylistContainer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/history" element={<History />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlist/:id" element={<PlaylistContainer />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Video,
  Playlist,
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
        <Route path="/:videoId" element={<Video />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:id" element={<PlaylistContainer />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </div>
  );
};

export default App;

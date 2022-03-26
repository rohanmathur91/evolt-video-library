import { Routes, Route } from "react-router-dom";
import { Home, Login, VideoListing, WatchLater } from "./pages";
import { Navbar, PlaylistContainer } from "./components";
import Mockman from "mockman-js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/playlist" element={<VideoListing />} />
        <Route path="/playlist/:id" element={<PlaylistContainer />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;

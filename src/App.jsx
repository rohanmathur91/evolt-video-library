import { Routes, Route } from "react-router-dom";
import { Home, Login, VideoListing, WatchLater, Playlist } from "./pages";
import { Navbar, Toast } from "./components";
import Mockman from "mockman-js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;

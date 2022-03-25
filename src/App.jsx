import { Routes, Route } from "react-router-dom";
import { Home, Login, VideoListing, WatchLater, Playlist } from "./pages";
import { Navbar, Explore, Toast, Modal } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Toast />
      {/* <Modal /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />}>
          <Route index element={<VideoListing />} />
          <Route path="watch-later" element={<WatchLater />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

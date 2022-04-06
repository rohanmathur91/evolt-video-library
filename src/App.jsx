import { Routes, Route } from "react-router-dom";
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
import { Toast, Navbar, PlaylistContainer, PrivateRoute } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:id" element={<PlaylistContainer />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/watch-later" element={<WatchLater />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

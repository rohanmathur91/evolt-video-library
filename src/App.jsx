import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, VideoListing } from "./pages";
import { Navbar, Explore } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />}>
          <Route index element={<VideoListing />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

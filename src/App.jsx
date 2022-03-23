import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import { Navbar, VideosListing } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<VideosListing />} />
      </Routes>
    </div>
  );
}

export default App;

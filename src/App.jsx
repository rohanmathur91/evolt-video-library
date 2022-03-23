import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Videos } from "./pages";
import { Navbar, VideoCard } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;

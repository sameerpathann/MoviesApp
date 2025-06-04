import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Templates/Popular";
import Movie from "./Components/Templates/Movie";
import Tvshow from "./Components/Templates/Tvshow";

const App = () => {
  document.title = "Movix | Homepage";
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshow" element={<Tvshow />} />
      </Routes>
    </div>
  );
};

export default App;

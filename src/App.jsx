import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Templates/Popular";
import Movie from "./Components/Templates/Movie";
import Tvshow from "./Components/Templates/Tvshow";
import People from "./Components/Templates/People";

const App = () => {
  document.title = "Movix | Homepage";

  return (
    <div className="min-h-screen bg-[#1F1E24] flex flex-row overflow-hidden">
      <main className="flex h-full overflow-y-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tvshow" element={<Tvshow />} />
          <Route path="/peoples" element={<People />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

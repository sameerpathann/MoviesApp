import { useNavigate } from "react-router-dom";
import Topnav from "./Templates/Topnav";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";
import { useSelector } from "react-redux";
import { filterTrendingMovie } from "../Store/reducers/TrendingmovieSlice";

const Trending = () => {
  document.title = "Movix | Trending Page";
  const navigate = useNavigate();
  const { filterTrendingMovies } = useSelector(
    (state) => state.trendingMoviesReducer
  );

  return (
    <div className="min-h-screen w-full bg-[#1F1E24] px-4 py-4 overflow-y-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] cursor-pointer active:scale-90 transition"
          ></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
        </div>

        <Dropdown
          title="Filter"
          options={["movie", "tv"]}
          action={filterTrendingMovie}
        />
      </div>

      <div className="mb-4">
        <Topnav />
      </div>

      <Cards data={filterTrendingMovies} />
    </div>
  );
};

export default Trending;

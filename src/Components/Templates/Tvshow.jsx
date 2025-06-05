import { useSelector } from "react-redux";
import Topnav from "./Topnav";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Tvshow = () => {
  document.title = "Movix | TvShowsPage";
  const { trendingMovies } = useSelector(
    (state) => state.trendingMoviesReducer
  );

  const Navigate = useNavigate();

  return (
    <div className="w-screen h-screen px-4 sm:px-5 overflow-x-hidden overflow-y-auto">
      <div className="w-full py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <i
            onClick={() => Navigate(-1)}
            className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] cursor-pointer transition-transform active:scale-95"
          ></i>
          <h1 className="text-xl sm:text-2xl text-zinc-400 font-semibold">
            TV Shows
          </h1>
        </div>

        <div className="w-full sm:flex-1">
          <Topnav />
        </div>

        <div className="hidden sm:flex items-center justify-center"></div>
      </div>

      <Cards data={trendingMovies} />
    </div>
  );
};

export default Tvshow;

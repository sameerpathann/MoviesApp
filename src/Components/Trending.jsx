import { useNavigate } from "react-router-dom";
import Topnav from "./Templates/Topnav";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";
import { useSelector } from "react-redux";
import { filterTrendingMovie } from "../Store/reducers/TrendingmovieSlice";
const Trending = () => {
  document.title = "Movix | Trendingpage";
  const navigate = useNavigate();
  const { filterTrendingMovies } = useSelector(
    (state) => state.trendingMoviesReducer
  );
  const action = filterTrendingMovie;
  return (
    <div className="w-screen h-screen px-5 overflow-x-hidden overflow-y-auto">
      <div className="w-full h-[15%] flex items-center">
        <div className="w-[70%] h-full flex items-center gap-4">
          <div className="h-full w-[20%] flex items-center gap-4">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] transition-all duration-75 active:-translate-x-[5px] scale-1 active:scale-95 text-zinc-400 font-semibold cursor-pointer text-2xl ri-arrow-left-line"
            ></i>
            <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
          </div>
          <div className="w-[80%] h-full flex items-center justify-center">
            <Topnav />
          </div>
        </div>
        <div className="w-[30%] h-full flex items-center justify-center">
          <Dropdown
            title={"Filter"}
            options={["movie", "tv"]}
            action={action}
          />
        </div>
      </div>
      <Cards data={filterTrendingMovies} />
    </div>
  );
};

export default Trending;

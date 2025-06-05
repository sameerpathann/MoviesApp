import { useSelector } from "react-redux";
import Topnav from "./Topnav";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  document.title = "Movix | Movie Page";
  const { allMovies } = useSelector((state) => state.MoviesReducer);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen px-4 sm:px-6 md:px-10 overflow-x-hidden overflow-y-auto bg-[#1F1E24]">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between h-[15%] gap-4 md:gap-0">
        <div className="flex items-center gap-3 md:w-1/3">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line cursor-pointer text-2xl text-zinc-400 font-semibold hover:text-[#6556CD] transition-transform duration-75 active:-translate-x-1 active:scale-95"
            aria-label="Go Back"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(-1)}
          ></i>
          <h1 className="text-2xl text-zinc-400 font-semibold whitespace-nowrap">
            Movies
          </h1>
        </div>

        <div className="flex justify-center md:w-1/3">
          <Topnav />
        </div>

        <div className="flex justify-center md:justify-end md:w-1/3"></div>
      </div>

      <div className="mt-4 h-[85%]">
        <Cards data={allMovies} />
      </div>
    </div>
  );
};

export default Movie;

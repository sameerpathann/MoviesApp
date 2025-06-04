import { useSelector } from "react-redux";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { filterPopular } from "../../Store/reducers/PopularSlice";
const Movie = () => {
  document.title = "Movix | Moviegpage";
  const { allMovies } = useSelector((state) => state.MoviesReducer);
  const Navigate = useNavigate();
  const action = filterPopular;
  return (
    <div className="w-screen h-screen px-5 overflow-x-hidden overflow-y-auto">
      <div className="w-full h-[15%] flex items-center">
        <div className="w-[100%] h-full flex items-center gap-4">
          <div className="h-full w-[20%] flex items-center gap-4">
            {" "}
            <i
              onClick={() => Navigate(-1)}
              className="hover:text-[#6556CD] transition-all duration-75 active:-translate-x-[5px] scale-1 active:scale-95 text-zinc-400 font-semibold cursor-pointer text-2xl ri-arrow-left-line"
            ></i>
            <h1 className="text-2xl text-zinc-400 font-semibold">Popular</h1>
          </div>
          <div className="w-[80%] h-full flex items-center justify-center">
            <Topnav />
          </div>
        </div>
        <div className="w-[30%] h-full flex items-center justify-center">
          {/* <Dropdown
            title={"Filter"}
            options={["movie", "tv"]}
            action={filterPopular}
          /> */}
        </div>
      </div>
      <Cards data={allMovies} />
    </div>
  );
};

export default Movie;

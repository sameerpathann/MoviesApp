import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterMovie } from "../../Store/reducers/MoviesList";

const Topnav = () => {
  const [query, Setquery] = useState("");
  const dispatch = useDispatch();
  const { filteredMovies } = useSelector((state) => state.MoviesReducer);
  useEffect(() => {
    dispatch(filterMovie(query));
  }, [query]);
  return (
    <div className="h-16 relative flex justify-center items-center">
      <div className="h-full w-2/3 flex items-center justify-center gap-10">
        <i className="text-2xl text-zinc-400 cursor-pointer ri-search-line"></i>
        <input
          value={query}
          onChange={(e) => Setquery(e.target.value)}
          className="bg-transparent  outline-none border-none w-3/4  ring-[#6556CD] focus:ring-1 duration-200  p-3 font-semibold text-zinc-300 rounded-lg"
          type="text"
          placeholder="Search anything"
        />
        <i
          onClick={() => Setquery("")}
          className={`text-zinc-400 text-2xl cursor-pointer ri-close-fill ${
            query.length > 0 ? `opacity-100` : `opacity-0`
          }`}
        ></i>
      </div>
      <div className="w-1/2 left-[25%] right-0 bg-zinc-200  max-h-72 absolute top-[100%] overflow-y-scroll overflow-x-hidden hide-scrollbar">
        {filteredMovies.map((m, i) => (
          <Link
            key={i}
            className="flex items-center justify-start p-5 border-b-2 border-zinc-100 font-semibold text-sm hover:text-black text-zinc-600 hover:bg-zinc-300 duration-200 w-full gap-5"
          >
            <img
              className="w-20 h-20 rounded-2xl object-cover"
              src={
                m.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${m.backdrop_path}`
                  : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu0USCFZwKnomMof7OSN2zIbPlEiV-bmMAw&s`
              }
              alt="movie img"
            />
            <span>{m.title || m.original_title || m.original_name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;

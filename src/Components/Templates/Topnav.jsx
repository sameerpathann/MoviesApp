import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterMovie } from "../../Store/reducers/MoviesList";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { filteredMovies } = useSelector((state) => state.MoviesReducer);
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(filterMovie(query.trim()));
    }, 300);

    return () => clearTimeout(handler);
  }, [query, dispatch]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center w-full max-w-xl mx-auto h-16"
      role="search"
      aria-label="Search Movies and TV Shows"
    >
      <i
        className="ri-search-line text-2xl text-zinc-400 mr-3"
        aria-hidden="true"
      />

      <input
        type="search"
        placeholder="Search Movies and TV Shows"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow bg-transparent text-zinc-300 font-semibold rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-[#6556CD] placeholder:text-zinc-500 transition duration-200"
        aria-autocomplete="list"
        aria-controls="search-results"
        aria-activedescendant=""
        autoComplete="off"
      />

      <button
        type="button"
        onClick={() => setQuery("")}
        className={`ml-2 text-zinc-400 text-2xl focus:outline-none ${
          query.length === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Clear search input"
      ></button>

      {query.length > 0 && filteredMovies.length > 0 && (
        <ul
          id="search-results"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-zinc-50 shadow-lg rounded-md z-20 hide-scrollbar"
        >
          {filteredMovies.map((m, i) => (
            <li key={i} role="option" tabIndex={-1}>
              <Link
                to={`/movie/${m.id}`}
                className="flex items-center gap-4 p-4 border-b border-zinc-200 text-zinc-700 hover:bg-zinc-200 focus:bg-zinc-200 focus:outline-none"
              >
                <img
                  src={
                    m.backdrop_path
                      ? `https://image.tmdb.org/t/p/w92/${m.backdrop_path}`
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu0USCFZwKnomMof7OSN2zIbPlEiV-bmMAw&s"
                  }
                  alt={m.title || m.original_title || "Movie Poster"}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <span className="truncate font-semibold">
                  {m.title || m.original_title || m.original_name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Topnav;

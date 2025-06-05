import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full px-4 py-6">
      {data[0]?.results?.map((m, i) => (
        <Link
          key={i}
          className="relative group hover:scale-[1.03] transition-all duration-300"
        >
          <img
            className="w-full aspect-[2/3] object-cover rounded-lg shadow-md"
            src={`https://image.tmdb.org/t/p/original/${
              m.poster_path || m.profile_path
            }`}
            alt={m.title || m.original_title || m.original_name || "Untitled"}
          />

          <h1 className="text-sm sm:text-base mt-2 font-semibold text-zinc-300 truncate">
            {m.title ||
              m.original_title ||
              m.original_name ||
              "No Title Available"}
          </h1>

          {m.vote_average && (
            <div className="absolute top-2 right-2 bg-yellow-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md">
              {(m.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;

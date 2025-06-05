import { useSelector } from "react-redux";

const HorizontalCards = () => {
  const { filterTrendingMovies } = useSelector(
    (state) => state.trendingMoviesReducer
  );

  return (
    <div className="w-full min-h-52 p-2 mb-5">
      <div className="w-max h-[40vh]  flex items-center gap-3 overflow-x-auto hide-scrollbar">
        {filterTrendingMovies[0].results.map((m, i) => (
          <div
            key={i}
            className="w-52 h-full bg-zinc-900 hover:bg-zinc-800 cursor-pointer transition-all duration-200 img-hover animate-scrollX overflow-hidden rounded"
          >
            <img
              className="w-full min-h-40 object-cover object-right-top rounded img transition-all duration-100"
              src={
                m.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      m.poster_path || m.backdrop_path
                    }`
                  : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu0USCFZwKnomMof7OSN2zIbPlEiV-bmMAw&s`
              }
              alt="movie img"
            />
            <h1 className="mt-1 text-lg text-white font-bold">
              {m.title ||
                m.original_title ||
                m.original_name ||
                "No Title Available"}
            </h1>
            <p className="mt-2 w-52 text-white font-medium">
              {m.overview.slice(0, 25)}
              <span className="ml-2 text-zinc-300">more...</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { trendingMovies } = useSelector(
    (state) => state.trendingMoviesReducer
  );

  if (!trendingMovies[0]?.results?.length) return null; // handle empty data

  const randomIndex = Math.floor(
    Math.random() * trendingMovies[0].results.length
  );
  const randomImage = trendingMovies[0].results[randomIndex];

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${randomImage.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex flex-col justify-end p-6 sm:p-12"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold max-w-3xl drop-shadow-lg">
        {randomImage.title ||
          randomImage.original_title ||
          randomImage.original_name ||
          "No Title Available"}
      </h1>
      <p className="mt-3 mb-5 text-white font-medium max-w-3xl sm:text-lg text-sm sm:text-justify line-clamp-4">
        {randomImage.overview || "No description available."}
        <Link
          to={`/details/${randomImage.id}`}
          className="ml-2 text-blue-400 underline"
        >
          more...
        </Link>
      </p>
      <div className="flex items-center space-x-6 text-white font-medium max-w-3xl text-sm sm:text-base">
        <span className="flex items-center gap-1">
          <i className="text-yellow-500 ri-megaphone-fill"></i>
          {randomImage.release_date || "No Information Available"}
        </span>
        <span className="flex items-center gap-1">
          <i className="text-yellow-500 ri-album-fill"></i>
          {(randomImage.media_type || "N/A").toUpperCase()}
        </span>
      </div>
      <Link
        to={`/trailer/${randomImage.id}`}
        className="mt-6 inline-block px-6 py-3 bg-[#6556CD] rounded-lg font-semibold text-white shadow-lg hover:bg-[#4a43a3] md:w-[20%] transition"
      >
        Watch Trailer
      </Link>
    </header>
  );
};

export default Header;

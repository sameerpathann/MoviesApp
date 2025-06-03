import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { trendingMovies } = useSelector(
    (state) => state.trendingMoviesReducer
  );
  const randomIndex = Math.floor(
    Math.random() * trendingMovies[0].results.length
  );
  const randomImage = trendingMovies[0].results[randomIndex];
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${randomImage.backdrop_path}) no-repeat top center / cover`,
      }}
      className="w-full h-3/5 p-[5%] flex flex-col justify-end items-start"
    >
      <h1 className="text-3xl text-white font-bold">
        {randomImage.title ||
          randomImage.original_title ||
          randomImage.original_name ||
          "No Title Available"}
      </h1>
      <p className="mt-3 mb-3 text-white font-medium w-2/3 text-justify">
        {randomImage.overview.slice(0, 200)}
        <Link className="ml-2 text-blue-400">more...</Link>
      </p>
      <p className="text-white mb-3 font-medium">
        <i className="text-yellow-500 mr-1 ri-megaphone-fill"></i>
        {randomImage.release_date || "No Information Available"}
        <i className="text-yellow-500 ml-3 mr-1 ri-album-fill"></i>
        {randomImage.media_type.toUpperCase() || "No Information Available"}
      </p>
      <Link className="p-3 bg-[#6556CD] rounded-lg font-medium text-white">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;

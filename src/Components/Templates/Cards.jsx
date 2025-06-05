import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="w-full gap-x-6 gap-y-9 h-[85%] flex flex-wrap justify-center">
      {data[0]?.results?.map((m, i) => (
        <Link key={i} className="w-[15%] h-[50%] relative">
          <img
            className="w-full h-[90%] object-cover object-center"
            src={`https://image.tmdb.org/t/p/original/${
              m.poster_path || m.poster_path || m.profile_path
            }`}
            alt=""
          />
          <h1 className="sm:text-xl text-xs font-semibold text-zinc-300">
            {" "}
            {m.title ||
              m.original_title ||
              m.original_name ||
              "No Title Available"}
          </h1>
          {m.vote_average && (
            <div className="text-white font-semibold bg-yellow-600 w-[7vh] h-[7vh] flex justify-center items-center rounded-full absolute right-[-10%] bottom-[30%]">
              {(m.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;

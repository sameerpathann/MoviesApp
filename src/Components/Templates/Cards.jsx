import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="w-full gap-x-4 gap-y-9 h-[85%] flex flex-wrap justify-center">
      {data[0]?.results?.map((m, i) => (
        <Link key={i} className="w-[15%] h-[50%]">
          <img
            className="w-full h-[90%] object-cover object-center"
            src={`https://image.tmdb.org/t/p/original/${
              m.poster_path || m.poster_path
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
        </Link>
      ))}
    </div>
  );
};

export default Cards;

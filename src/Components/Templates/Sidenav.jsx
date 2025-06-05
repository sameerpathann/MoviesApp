import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r border-zinc-400 p-6">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>Movix.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white text-lg font-semibold mt-5 ">New Feeds</h1>
        <Link
          to={"/trending"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link
          to={"/popular"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link
          to={"/movie"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-movie-2-line mr-2"></i>
          Movies
        </Link>
        <Link
          to={"/tvshow"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link
          to={"/peoples"}
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-team-fill mr-2"></i>
          Peoples
        </Link>
      </nav>
      <hr className="border-none bg-zinc-400 h-[0.5px] mt-2" />
      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white text-lg font-semibold mt-5 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-information-fill mr-2"></i>
          About Movix
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;

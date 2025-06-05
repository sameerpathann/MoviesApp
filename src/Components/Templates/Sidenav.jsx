import { Link } from "react-router-dom";
import { useState } from "react";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden bg-[#1F1E24] text-zinc-400 relative px-4 py-3">
        <button
          className="absolute left-0 top-10 -translate-y-1/2"
          onClick={() => setIsOpen(true)}
        >
          <i className="ri-menu-line text-2xl rotate-180"></i>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[70%] sm:w-[50%] md:static md:w-[50%] z-50 bg-[#1e1e1e] border-r border-zinc-400 p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between md:hidden mb-4">
          <h1 className="text-2xl text-white font-bold cursor-pointer">
            <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span>Movix.</span>
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <i className="ri-close-line text-3xl text-white"></i>
          </button>
        </div>

        <div className="hidden md:block mb-4">
          <h1 className="text-2xl text-white font-bold cursor-pointer">
            <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span>Movix.</span>
          </h1>
        </div>

        <nav className="flex flex-col text-zinc-400 text-lg gap-3 min-h-full">
          <h1 className="text-white text-lg font-semibold mt-5">New Feeds</h1>
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
            <span className="w-full"> Tv Shows</span>
          </Link>
          <Link
            to={"/peoples"}
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
          >
            <i className="ri-team-fill mr-2"></i>
            Peoples
          </Link>
        </nav>

        <hr className="border-none bg-zinc-400 h-[0.5px] mt-5" />

        <nav className="flex flex-col text-zinc-400 text-lg gap-3">
          <h1 className="text-white text-lg font-semibold mt-5">
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
    </>
  );
};

export default Sidenav;

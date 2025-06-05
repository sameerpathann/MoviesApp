import Dropdown from "./Templates/Dropdown";
import Header from "./Templates/Header";
import HorizontalCards from "./Templates/HorizontalCards";
import Sidenav from "./Templates/Sidenav";
import Topnav from "./Templates/Topnav";
import { filterTrendingMovie } from "../Store/reducers/TrendingmovieSlice";

const Home = () => {
  return (
    <>
      <Sidenav />
      <div className="flex flex-col md:flex-row min-h-screen bg-[#1F1E24] overflow-hidden">
        <div className="flex-1 h-full overflow-y-auto overflow-x-hidden">
          <Topnav />
          <Header />
          <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 px-5 gap-2 sm:gap-0">
            <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
            <Dropdown
              title="Filter"
              options={["tv", "movie"]}
              action={filterTrendingMovie}
            />
          </div>
          <HorizontalCards />
        </div>
      </div>
    </>
  );
};

export default Home;

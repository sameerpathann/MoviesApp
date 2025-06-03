import Dropdown from "./Templates/Dropdown";
import Header from "./Templates/Header";
import HorizontalCards from "./Templates/HorizontalCards";
import Sidenav from "./Templates/Sidenav";
import Topnav from "./Templates/Topnav";

const Home = () => {
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-y-auto overflow-x-hidden">
        <Topnav />
        <Header />
        <div className="mb-2 flex items-center justify-between mt-3 px-5">
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie"]} />
        </div>
        <HorizontalCards />
      </div>
    </>
  );
};

export default Home;

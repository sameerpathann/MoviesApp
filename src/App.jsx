import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  document.title = "Movix | Homepage";
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="" */}
      </Routes>
    </div>
  );
};

export default App;

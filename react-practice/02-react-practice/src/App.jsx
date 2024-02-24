import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white p-5 rounded max-w-sm ml-5 text-black">
      <Outlet />
      </div>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black p-5 px-10 flex justify-between">
      <h1 className="font-semibold text-lg font-mono text-white">BLOG.CO</h1>
      <ul className="flex gap-x-5 text-white font-serif">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="bg-gray-950 p-5 px-16 text-white flex items-center justify-between">
      <ul className="flex space-x-7">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h1 className="text-xl text-center mr-24">DashDeals</h1>
      <ul className="flex items-center space-x-5">
        <li>Login</li>
        <FiShoppingCart className="text-2xl relative"/>
        <span className="absolute top-2 right-16">3</span>
      </ul>
    </div>
  );
};
export default Navbar;

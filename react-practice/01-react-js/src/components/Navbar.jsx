const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="bg-black px-10 py-5">
        <h1 className="text-white font-bold text-lg font-sans">BLOG.CO</h1>
      </div>
      <ul className="flex space-x-3 font-sans justify-center text-white">
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
      <div></div>
    </div>
  );
};
export default Navbar;

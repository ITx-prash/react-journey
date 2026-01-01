import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 rounded-full bg-white px-5 py-4 shadow-lg select-none lg:min-w-xl lg:flex-row lg:justify-between lg:gap-15">
      <NavLink
        to={"/day18-shopping"}
        className={
          "text-gray-700 transition-all duration-200 hover:scale-105 hover:text-gray-900"
        }
      >
        <IoHome className="text-2xl" />
      </NavLink>

      <h2 className="bg-linear-to-r from-sky-500 via-violet-700 to-purple-700 bg-clip-text text-xl font-bold text-transparent">
        React Redux Shopping Cart
      </h2>

      <NavLink
        to="/day18-shopping/cart"
        className="text-gray-700 transition-all duration-200 hover:scale-110 hover:text-gray-900"
      >
        <IoMdCart className="text-2xl" />
      </NavLink>
    </nav>
  );
};
export default Navbar;

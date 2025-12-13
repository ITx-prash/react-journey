import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const NavHeader = () => {
  return (
    <Link
      to="/"
      className="fixed top-4 left-4 z-50 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      title="Back to Home"
    >
      <MdHome className="text-2xl text-gray-700" />
    </Link>
  );
};

export default NavHeader;

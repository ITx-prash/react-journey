import { Link } from "react-router-dom";
import { MdHome, MdArrowBack } from "react-icons/md";

const NavHeader = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-blue-600"
        >
          <MdArrowBack className="text-2xl" />
          <MdHome className="text-2xl" />
          <span>Back to Home</span>
        </Link>
        <a
          href="https://github.com/ITx-prash/react-journey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default NavHeader;

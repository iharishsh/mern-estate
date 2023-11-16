import { brandlogowetp } from "../assets";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#f3f3eb] shadow-md m-3 rounded-2xl sticky">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={brandlogowetp} className="w-20 h-20" />
          <h1 className="font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-900">Harish </span>
            <span className="text-amber-600"> Real Estate Agency</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-20 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 md:gap-1">
          <Link to="/">
            <li className="hidden sm:inline text-slate-900 hover:bg-amber-600 hover:text-slate-50 p-2 rounded-xl hover:shadow-md">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-900  hover:bg-amber-600 hover:text-slate-50 p-2 rounded-xl hover:shadow-md">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="sm:inline text-slate-900  hover:bg-amber-600 hover:text-slate-50 p-2 rounded-xl hover:shadow-md">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

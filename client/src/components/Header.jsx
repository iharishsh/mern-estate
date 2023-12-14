import { brandlogowetp } from "../assets";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-[#f3f3eb] shadow-md m-3 rounded-2xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={brandlogowetp} className="w-20 h-20" />
          <h1 className="font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-900">Harish </span>
            <span className="text-amber-600"> Real Estate Agency</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-20 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

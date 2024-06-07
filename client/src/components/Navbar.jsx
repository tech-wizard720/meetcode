import React from "react";
import { SiLeetcode } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ transparent }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`py-4 px-8 ${transparent && isHomePage ? 'bg-transparent' : 'bg-white'} shadow-sm`}>
      <ul className="flex justify-between items-center">
        <div>
          <Link to="/">
            <span className={`flex items-center gap-1 font-mono ${transparent && isHomePage ? 'text-white' : 'text-indigo-700'}`}>
              <SiLeetcode className="text-xl" /> Meetcode
            </span>
          </Link>
        </div>
        <div className='gap-8 flex flex-grow justify-end'>
          {isHomePage ? (
            // Only show "Sign In" link on the landing page
            <Link to="/login" className={`${
              transparent && isHomePage
                ? 'text-indigo hover:text-gray-300 hover:bg-gray-600'
                : 'text-indigo-700 hover:text-indigo-500'
            } py-2 px-4 rounded transition-all duration-300`}>
              Sign In
            </Link>
          ) : (
            // Show other links on pages other than the landing page
            <>
              <Link to="/problems" className={`${transparent && isHomePage ? 'hidden' : 'text-indigo-700 mr-4'}`}>Problems</Link>
              <Link to="/" className={`${transparent && isHomePage ? 'hidden' : 'text-indigo-700'}`}>Logout</Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

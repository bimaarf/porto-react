import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
export const NavMenu = () => {
  const location = useLocation();
  const [isActive, setActive] = useState("false");
  const showSidebar = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className="px-4 z-50 sm:px-4 backdrop-filter backdrop-blur-lg py-4 sticky top-0 [other classes here] dark:border-gray-800 border-b font-semibold">
        <div className="lg:container lg:px-60 flex flex-wrap gap-4 items-center mx-auto">
          <button
            onClick={showSidebar}
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <Link to="/">
            <h2 className="self-center text-xl whitespace-nowrap dark:text-white cursor-pointer">
              bima
              <span className="text-xl dark:text-blue-400">rf.in</span>
            </h2>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
              <Link to="/" aria-current="page">
                <a
                  className={`
                  ${
                    location.pathname === "/"
                      ? "rounded-lg border-none btn btn-sm capitalize bg-slate-800 text-gray-100 hover:bg-slate-700 duration-500 ease-in-out"
                      : "rounded-lg border-none btn btn-sm capitalize bg-transparent text-gray-100 hover:bg-slate-700 duration-500 ease-in-out"
                  }
                     `}
                >
                  Home
                </a>
              </Link>
              <Link to="/tweets" aria-current="page">
                <a
                  className={`
                  ${
                    location.pathname === "/tweets"
                      ? "rounded-lg border-none btn btn-sm capitalize bg-slate-800 text-gray-100 hover:bg-slate-700 duration-500 ease-in-out"
                      : "rounded-lg border-none btn btn-sm capitalize bg-transparent text-gray-100 hover:bg-slate-700 duration-500 ease-in-out"
                  }
                     `}
                >
                  Tweets
                </a>
              </Link>
              <Link to="/experiences" aria-current="page">
                <a
                  className={`
                  ${
                    location.pathname === "/experiences"
                      ? "rounded-lg border-none btn btn-sm capitalize bg-slate-800 text-gray-100 hover:bg-slate-700 duration-500 ease-in-out"
                      : "rounded-lg border-none btn btn-sm capitalize bg-transparent text-gray-100 hover:bg-slate-700 duration-500 ease-in-out"
                  }
                     `}
                >
                  Experiences
                </a>
              </Link>
            </ul>
          </div>
        </div>
        {/* mobile - nav */}
        <div className={!isActive ? "md:hidden mt-4" : "hidden"}>
          <ul
            className="
              text-base text-gray-300
              "
          >
            <li>
              <Link to="/">
                <a
                  onClick={showSidebar}
                  className={`
               ${
                 location.pathname === "/"
                   ? "p-2 block bg-gray-800 bg-opacity-30 rounded-lg text-gray-200"
                   : "p-2 block text-gray-400"
               }
                  `}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/tweets">
                <a
                  onClick={showSidebar}
                  className={`
               ${
                 location.pathname === "/tweets"
                   ? "p-2 block bg-gray-800 bg-opacity-30 rounded-lg text-gray-200"
                   : "p-2 block text-gray-400"
               }
                  `}
                >
                  Tweets
                </a>
              </Link>
            </li>
            <li>
              <Link to="/experiences">
                <a
                  onClick={showSidebar}
                  className={`
               ${
                 location.pathname === "/experiences"
                   ? "p-2 block bg-gray-800 bg-opacity-30 rounded-lg text-gray-200"
                   : "p-2 block text-gray-400"
               }
                  `}
                >
                  Experiences
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile - nav */}
      </nav>
    </>
  );
};

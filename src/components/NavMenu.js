import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsFillMoonFill, BsCloudSunFill } from "react-icons/bs";
export const NavMenu = () => {
  const location = useLocation();
  const [isActive, setActive] = useState("false");
  const showSidebar = () => {
    setActive(!isActive);
  };

  // theme
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const changeTheme = (e) => {
    e.preventDefault();
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [changeTheme]);

  return (
    <>
      <nav className="px-4 z-50 sm:px-4 dark:backdrop-filter dark:backdrop-blur-lg bg-white dark:bg-transparent py-4 sticky top-0 [other classes here] border-gray-200 dark:border-gray-800 border-b font-semibold">
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
            <h2 className="self-center text-xl whitespace-nowrap text-gray-700 dark:text-white cursor-pointer font-bold">
              bim
              <span className="text-xl dark:text-blue-400">arf.in</span>
            </h2>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
              <Link
                to="/"
                aria-current="page"
                className={`
              ${
                location.pathname === "/"
                  ? "rounded-lg border-none btn btn-sm capitalize bg-gray-300 dark:bg-slate-800 text-gray-700 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-slate-700 duration-500 ease-in-out font-semibold"
                  : "rounded-lg border-none btn btn-sm capitalize bg-transparent text-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-700 duration-500 ease-in-out"
              }
                 `}
              >
                Home
              </Link>
              <Link
                to="/tweets"
                aria-current="page"
                className={`
               ${
                 location.pathname === "/tweets"
                   ? "rounded-lg border-none btn btn-sm capitalize bg-gray-300 dark:bg-slate-800 text-gray-700 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-slate-700 duration-500 ease-in-out font-semibold"
                   : "rounded-lg border-none btn btn-sm capitalize bg-transparent text-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-700 duration-500 ease-in-out"
               }
                  `}
              >
                Tweets
              </Link>
              <Link
                to="/experiences"
                aria-current="page"
                className={`
              ${
                location.pathname === "/experiences"
                  ? "rounded-lg border-none btn btn-sm capitalize bg-gray-300 dark:bg-slate-800 text-gray-700 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-slate-700 duration-500 ease-in-out font-semibold"
                  : "rounded-lg border-none btn btn-sm capitalize bg-transparent text-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-700 duration-500 ease-in-out"
              }
                 `}
              >
                Experiences
              </Link>
            </ul>
          </div>
          {/* toggle theme */}
          <button className="text-yellow-300" onClick={changeTheme}>
            {theme === "dark" ? <BsFillMoonFill /> : <BsCloudSunFill />}
          </button>
        </div>
        {/* mobile - nav */}
        <div className={!isActive ? "md:hidden mt-4" : "hidden"}>
          <ul
            className="
              text-base text-gray-300
              "
          >
            <li>
              <Link
                to="/"
                onClick={showSidebar}
                className={`
           ${
             location.pathname === "/"
               ? "p-2 block bg-gray-100 dark:bg-gray-800 dark:bg-opacity-30 rounded-lg text-gray-700 dark:text-gray-200"
               : "p-2 block text-gray-700 dark:text-gray-400"
           }
              `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tweets"
                onClick={showSidebar}
                className={`
            ${
              location.pathname === "/tweets"
                ? "p-2 block bg-gray-100 dark:bg-gray-800 dark:bg-opacity-30 rounded-lg text-gray-700 dark:text-gray-200"
                : "p-2 block text-gray-700 dark:text-gray-400"
            }
               `}
              >
                Tweets
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                onClick={showSidebar}
                className={`
           ${
             location.pathname === "/experiences"
               ? "p-2 block bg-gray-100 dark:bg-gray-800 dark:bg-opacity-30 rounded-lg text-gray-700 dark:text-gray-200"
               : "p-2 block text-gray-700 dark:text-gray-400"
           }
              `}
              >
                Experiences
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile - nav */}
      </nav>
    </>
  );
};

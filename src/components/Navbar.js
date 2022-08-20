import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NavMenu } from "./NavMenu";
import axios from "axios";
import { toast } from "react-toastify";
import "../App.css";
export const Navbar = ({ setAuthCheck, authCheck }) => {
  const [loadSubmit, setLoadSubmit] = useState(false);
  const logoutNow = async (e) => {
    setLoadSubmit(true);
    await axios.post(`api/logout`).then((res) => {
      localStorage.clear();
      toast.success("You have successfully logged out");
      setAuthCheck(false);
      setLoadSubmit(false);
    });
  };
  // const [authCheck, setAuthCheck] = useState();

  return (
    <>
      <div className="bg-blue-100 dark:bg-blue-300 text-center text-sm md:text-md font-bold py-1 md:py-3">
        <span className="text-gray-800">
          Hai~ i have a new look! What do you think? ☺️
        </span>
      </div>
      <div className="border-b flex justify-between dark:border-gray-800 border-gray-200 text-center text-xs text-gray-700 font-semibold dark:text-gray-400 p-2">
        <div className="lg:container lg:mx-auto">
          <a
            href="https://saweria.co/bimarf"
            target="__blank"
            className="hover-underline-animation underline-offset-4"
          >
            <i className="fa fa-heart-o mr-1"></i>
            Support
          </a>
        <a
          href="https://cv-builder.bimarf.in"
          target="__blank"
          className="hover-underline-animation underline-offset-4 ml-2"
        >
          <i className="fa fa-link mr-1"></i>
          CV-Builder
        </a>
        </div>
        <div className="lg:container lg:mx-auto">
          <a
            href="https://instagram.com/bimaarf_"
            target="__blank"
            className="hover-underline-animation underline-offset- mr-2"
          >
            <i className="fa fa-instagram mr-1"></i>
            bimaarf_
          </a>
          {authCheck ? (
            <button
              disabled={loadSubmit ? true : false}
              type="buton"
              onClick={logoutNow}
            >
              <i className="fa fa-user ml-2 mx-1"></i>
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="hover-underline-animation underline-offset-4 ml-2"
            >
              <i className="fa fa-user mx-1"></i>
              Auth
            </Link>
          )}
        </div>
      </div>
      {/* nav */}
      <NavMenu />
    </>
  );
};

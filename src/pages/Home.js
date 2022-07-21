import React from "react";
import { DataCard } from "../data/DataProject";
import { Link } from "react-router-dom";
import axios from "axios";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <>
      <div className="dark bg-slate-900 px-2">
        <div className="lg:container lg:mx-auto">
          <div className="my-4 text-white text-center">
            <h6 className="text-sm">
              Hello World!, I&apos;m
              <a
                href="https://instagram.com/bimaarf_"
                target="__blank"
                className="ml-1 dark:text-blue-400 hover:text-blue-500"
              >
                @bimaarf_
              </a>
            </h6>
            <p className="text-xs text-gray-500 px-2">
              My project history, starting from personal projects, during
              internships or work, etc.
            </p>
            <h1 className="mt-4 text-2xl md:text-4xl font-bold">
              A Programmer from
              <span className="dark:text-blue-400">
                {" "}
                {""}
                West Kalimantan - Indonesia {""}
              </span>
              who focuses on Website Technology.
            </h1>
          </div>
          <ul className="md:flex text-center md:justify-center md:gap-4">
            <li className="mt-6 ">
              <Link to="/">
                <button className="py-3 px-20 w-full md:w-auto font-semibold rounded-lg duration-500 md:mt-0 bg-blue-500 text-gray-900 hover:bg-gray-700 hover:text-white">
                  Say &quot;Hi!&quot; to Me!👋
                </button>
              </Link>
            </li>
            <li className="mt-6">
              <Link to="/tweets">
                <button className="py-3 px-20 w-full md:w-auto rounded-lg duration-500 md:mt-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white">
                  Read My Tweets 📃
                </button>
              </Link>
            </li>
            <li className="mt-6 ">
              <a href="https://www.instagram.com/bimaarf_/" target="__blank">
                <button className="py-3 px-20 w-full md:w-auto rounded-lg duration-500 md:mt-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white">
                  <i className="fa fa-instagram"></i> bimaarf_
                </button>
              </a>
            </li>
          </ul>
          <div className="my-8 flex justify-center space-x-4 ">
            <picture>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png"
                alt=""
                className="h-10"
              />
            </picture>
            <picture>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/bootstrap-5-logo.png"
                alt=""
                className="h-10"
              />
            </picture>
            <picture>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt=""
                className="h-10"
              />
            </picture>
            <picture>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt=""
                className="h-10"
              />
            </picture>
          </div>
          <div className="text-white md:text-2xl flex items-center space-x-2 my-4">
            <i className="fa fa-laptop"></i>
            <p className="font-bold ">My Projects</p>
          </div>
          <div className="md:grid gap-4 grid-cols-3 mt-4">
            {DataCard.map((projectList, index) => (
              <div key={index} className="card rounded-lg ring-1 ring-gray-800 mx-2 my-4">
                <div className="card-body">
                  <picture>
                    <img
                      src={`${axios.defaults.baseURL}image/${projectList.image}`}
                      alt=""
                      className="rounded-lg"
                    />
                  </picture>
                  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    {projectList.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    {projectList.body.substring(0, 150)}
                  </p>
                </div>
                <div className="p-4">
                  <a
                    href="#"
                    className="md:mt-4 py-1 px-2 text-xs rounded-md bg-slate-800 hover:bg-slate-700 duration-500 ease-in-out text-white "
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                  <a
                    href="#"
                    className="md:mt-4 py-2 px-4 text-xs text-blue-300"
                  >
                    <span className="text-gray-400 mr-1">or</span>{" "}
                    <span className="hover-underline-animation underline-offset-4">
                      View Website<i className="fa fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

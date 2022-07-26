import axios from "axios";
import React, { useEffect } from "react";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";
export const Experiences = () => {
  useEffect(() => {
    document.title = "Experiences - bimarf.in";
  });
  const style = {
    image: {
      marginTop: "-20px",
    },
  };
  return (
    <>
      <div className="xl:container lg:mx-auto p-4 lg:px-60">
        <div className="text-gray-700 dark:text-white md:text-2xl flex items-center space-x-2 my-4">
          <i className="fa fa-clock-o"></i>
          <p className="font-bold">My Experience and Internship</p>
        </div>
        <div className="text-white text-sm md:text-md">
          <div className="text-gray-500  md:block md:-mt-1 -ml-2 md:-ml-3 absolute">
            <i className="fa fa-circle text-gray-200 border-gray-200 dark:text-gray-800 text-xl md:text-3xl -mt-2"></i>
          </div>
          <div className="border border-y-0 border-r-0 border-gray-200 dark:border-l-gray-800 pb-6">
            <div className="md:ml-8 ml-4">
              <h1 className="text-gray-700 dark:text-white font-semibold mb-2 -mt-1">
                bimarf.in - Portfolio
              </h1>
              <br />
              <p className="text-gray-500">
                Front end web dibuat dengan React Js + Tailwind dan supported by
                Laravel 8 sebagai backend
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto max-w-full object-cover"
                    src={`${axios.defaults.baseURL}image/experiences_image/portofolio.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>bimarf.in - Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1 mt-6">
                <Link
                  to="/experiences"
                  className="md:mt-4 py-1 px-2 text-xs rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 ease-in-out dark:text-white "
                >
                  Read More <i className="fa fa-angle-right"></i>
                </Link>
                <Link
                  to="/experiences"
                  className="md:mt-4 py-2 px-4 text-xs text-blue-300"
                >
                  <span className="text-gray-400 mr-1">or</span>{" "}
                  <span className="hover-underline-animation underline-offset-4">
                    View Website <i className="fa fa-angle-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm md:text-md">
          <div className="text-gray-500  md:block md:-mt-1 -ml-2 md:-ml-3 absolute">
            <i className="fa fa-circle text-gray-200 dark:text-gray-800 text-xl md:text-3xl -mt-2"></i>
          </div>
          <div className="border border-y-0 border-r-0 border-gray-200 dark:border-l-gray-800 pb-6">
            <div className="md:ml-8 ml-4">
              <h1 className="text-gray-700 dark:text-white font-semibold mb-2 -mt-1">
                Magang di PT Mada Jejaring Tenggara - Pontianak Kalimantan Barat
              </h1>
              <br />
              <p className="text-gray-500">
                Team work 9 orang yang terdiri dari 2 programmer, 1 UI/UX
                designer, 2 analis dan 4 pembuat dokumen. Website dibuat
                menggunakan framework Laravel + MDBootstrap dan sedikit suntikan
                javascript untuk membuat algoritma perhitungan berdasarkan jarak
                dari titik ke titik
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto max-w-full object-cover"
                    src={`${axios.defaults.baseURL}image/experiences_image/mitruck-landingpage.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Landing Page</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto max-w-full object-cover"
                    src={`${axios.defaults.baseURL}image/experiences_image/mitruck-admin-dashboard.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Dashboard</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="rounded border-blue-300 md:h-52 w-full object-cover"
                    src={`${axios.defaults.baseURL}image/experiences_image/meeting-1.jpg`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Meeting</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1 mt-6">
                <a
                  href="#"
                  className="md:mt-4 py-1 px-2 text-xs rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 ease-in-out dark:text-white "
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
                <a
                  href="https://mitruck.mada.co.id"
                  target="__blank"
                  className="md:mt-4 py-2 px-4 text-xs text-blue-300"
                >
                  <span className="text-gray-400 mr-1">or</span>{" "}
                  <span className="hover-underline-animation underline-offset-4">
                    View Website <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-sm md:text-md">
          <div className="text-gray-500  md:block md:-mt-1 -ml-2 md:-ml-3 absolute">
            <i className="fa fa-circle text-gray-200 dark:text-gray-800 text-xl md:text-3xl -mt-2"></i>
          </div>
          <div className="border border-y-0 border-r-0 border-l-gray-200 dark:border-l-gray-800 pb-6">
            <div className="md:ml-8 ml-4">
              <h1 className="text-gray-700 dark:text-white font-semibold mb-2 -mt-1">
                Restani - Marketplace
              </h1>
              <br />
              <p className="text-gray-500">
                Freelance work competition business plan and its implementation.
                Website dibuat dengan framework Laravel 8 + MDBootstrap
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto w-full object-cover"
                    alt=""
                    src={`${axios.defaults.baseURL}image/experiences_image/restani-porto.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Restani - Shop</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto w-full object-cover"
                    alt=""
                    src={`${axios.defaults.baseURL}image/experiences_image/restani-chart.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Restani - Chart</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto w-full object-cover"
                    alt=""
                    src={`${axios.defaults.baseURL}image/experiences_image/restani-chat.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Restani - Chat</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto w-full object-cover"
                    alt=""
                    src={`${axios.defaults.baseURL}image/experiences_image/restani-review.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Restani - Review</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1 mt-6">
                <Link
                  to="/experiences"
                  className="md:mt-4 py-1 px-2 text-xs rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 ease-in-out dark:text-white "
                >
                  Read More <i className="fa fa-angle-right"></i>
                </Link>
                <a
                  href="https://restani.bimarf.in"
                  target="__blank"
                  className="md:mt-4 py-2 px-4 text-xs text-blue-300"
                >
                  <span className="text-gray-400 mr-1">or</span>{" "}
                  <span className="hover-underline-animation underline-offset-4">
                    View Website <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm md:text-md">
          <div className="text-gray-500  md:block md:-mt-1 -ml-2 md:-ml-3 absolute">
            <i className="fa fa-circle text-gray-200 dark:text-gray-800 text-xl md:text-3xl -mt-2"></i>
          </div>
          <div className="border border-y-0 border-r-0 border-l-gray-200 dark:border-l-gray-800 pb-6">
            <div className="md:ml-8 ml-4">
              <h1 className="text-gray-700 dark:text-white font-semibold mb-2 -mt-1">
                Himpunan Mahasiswa Matematika Untan
              </h1>
              <br />
              <p className="text-gray-500">
                Website resmi organisasi dari Himpunan Mahasiswa Matematika
                FMIPA UNTAN. Website dibuat dengan meenggunakan framework
                Laravel 8
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto w-full object-cover"
                    src={`${axios.defaults.baseURL}image/experiences_image/himatikauntan.png`}
                  />
                  <div className="text-xs md:text-md text-gray-500 dark:text-white mt-2">
                    <div>
                      <p>Landing Page</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1 mt-6">
                <a
                  href="#"
                  className="md:mt-4 py-1 px-2 text-xs rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 ease-in-out dark:text-white "
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
                <a
                  href="https://himatikauntan.org"
                  target="__blank"
                  className="md:mt-4 py-2 px-4 text-xs text-blue-300"
                >
                  <span className="text-gray-400 mr-1">or</span>{" "}
                  <span className="hover-underline-animation underline-offset-4">
                    View Website <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm md:text-md">
          <div className="text-gray-500  md:block md:-mt-1 -ml-2 md:-ml-3 absolute">
            <i className="fa fa-circle text-gray-200 dark:text-gray-800 text-xl md:text-3xl -mt-2"></i>
          </div>
          <div className="border border-y-0 border-r-0 border-l-gray-200 dark:border-l-gray-800 pb-6">
            <div className="md:ml-8 ml-4">
              <h1 className="text-gray-700 dark:text-white font-semibold mb-2 -mt-1">
                Personal Marketplace
              </h1>
              <br />
              <p className="text-gray-500">
                A private marketplace that sells custom made clothing products.
                Website dibuat dengan menggunakan framework Laravel 8
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                <div>
                  <img
                    className="rounded border-blue-300 md:h-auto w-full object-cover"
                    src={`${axios.defaults.baseURL}image/experiences_image/toko.png`}
                  />
                  <div className="text-xs md:text-md text-white mt-2">
                    <div>
                      <p>Shop - Market</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1 mt-6">
                <a
                  href="#"
                  className="md:mt-4 py-1 px-2 text-xs rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 ease-in-out dark:text-white "
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
                <a href="#" className="md:mt-4 py-2 px-4 text-xs text-blue-300">
                  <span className="text-gray-400 mr-1">or</span>{" "}
                  <span className="hover-underline-animation underline-offset-4">
                    View Website <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white md:text-2xl flex items-center space-x-2 my-4">
          <i className="fa fa-certificate"></i>
          <p className="font-bold">My Certificates</p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 place-items-center ">
          <div className="block card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="card-body">
              <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Mahir membuat website modern dengan React JS
              </h5>
              <p className="text-xs text-gray-500">
                Issued Jul, 2022 - no expiration
              </p>
              <div className="mt-2">
                <p className="text-xs text-gray-400">Credential ID :</p>
                <p className="text-xs font-bold text-gray-400">2430460713</p>
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-400">Platform :</p>
                <p className="text-xs font-bold text-gray-400">Coding Studio</p>
              </div>
              <img
                src={`${axios.defaults.baseURL}image/experiences_image/wegodev-react.jpg`}
                className="my-2"
              />
            </div>
            <div className="flex justify-around text-sm gap-2 p-4">
              <a
                href="#"
                className="py-2 w-full text-center font-semibold rounded-lg duration-200 bg-gray-200 text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Show Credential
              </a>
              <a
                href={`${axios.defaults.baseURL}certificates/coding-studio-react-js.pdf`}
                target="__blank"
                className="py-2 w-full text-center font-semibold rounded-lg duration-200 bg-gray-200 text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Show Certificate
              </a>
            </div>
          </div>
          <div className="block card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="card-body">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cyber Security Course Level Basic
              </h5>
              <p className="text-xs text-gray-500">
                Issued Jul, 2022 - no expiration
              </p>
              <div className="mt-2">
                <p className="text-xs text-gray-400">Credential ID :</p>
                <p className="text-xs font-bold text-gray-400">
                  2255-164-927-7896
                </p>
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-400">Platform :</p>
                <p className="text-xs font-bold text-gray-400">IT Box</p>
              </div>
              <div>
                <img
                  src={`${axios.defaults.baseURL}image/experiences_image/cyber-security-basic.jpg`}
                  className="my-2"
                />
              </div>
            </div>
            <div className="flex justify-around text-sm gap-2 p-4">
              <a
                href="https://itbox.id/certificate-verifier/?&code=2255-164-927-7896"
                target="__blank"
                className="py-2 w-full text-center font-semibold rounded-lg duration-200 bg-gray-200 text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Show Credential
              </a>
              <a
                href={`${axios.defaults.baseURL}certificates/cyber-security-basic.pdf`}
                target="__blank"
                className="py-2 w-full text-center font-semibold rounded-lg duration-200 bg-gray-200 text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Show Certificate
              </a>
            </div>
          </div>
          <div className="block card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="card-body">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cyber Security Course Level Intermediate
              </h5>
              <p className="text-xs text-gray-500">
                Issued Jul, 2022 - no expiration
              </p>
              <div className="mt-2">
                <p className="text-xs text-gray-400">Credential ID :</p>
                <p className="text-xs font-bold text-gray-400">
                  2255-165-765-0581
                </p>
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-400">Platform :</p>
                <p className="text-xs font-bold text-gray-400">IT Box</p>
              </div>
              <img
                src={`${axios.defaults.baseURL}image/experiences_image/cyber-security-intermediate.jpg`}
                className="my-2"
              />
            </div>
            <div className="flex justify-around text-sm gap-2 p-4">
              <a
                href="https://itbox.id/certificate-verifier/?&code=2255-165-765-0581"
                target="__blank"
                className="py-2 w-full text-center font-semibold rounded-lg duration-200 bg-gray-200 text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Show Credential
              </a>
              <a
                href={`${axios.defaults.baseURL}certificates/cyber-security-intermediate.pdf`}
                target="__blank"
                className="py-2 w-full text-center font-semibold rounded-lg duration-200 bg-gray-200 text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                Show Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

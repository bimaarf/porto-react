import axios from "axios";
import React from "react";
const GetTweet = ({ getTweet, index }) => {
  return (
    <>
      <div
        key={index}
        className={`md:grid grid-cols-[20%_80%] w-full ${
          index % 3 === 0 ? "my-10" : ""
        }`}
      >
        <div className="text-gray-500 text-sm hidden md:block -mt-1">
          <i className="fa fa-clock-o"></i>
          <span className="ml-2">{getTweet.created_at}</span>
        </div>
        <div
          className={`border border-y-0 border-r-0 border-l-gray-800 mt-3.5 pb-6 ${
            index % 3 === 0 ? "border-b-gray-800 border-b" : ""
          }`}
        >
          <i className="fa fa-circle-o absolute -mt-3.5 text-gray-500 -ml-2"></i>
          <div className="md:ml-8 ml-3">
            <div className="flex justify-between">
              <div className="float-left">
                <h1 className=" absolute -mt-5 text-gray-300 font-semibold">
                  <i className="fa fa-twitter mr-1"></i>
                  {getTweet.user.name}
                </h1>
                <br />
                {/* <Link to={`/tweet/${getTweet.id}`} className="text-white"> {getTweet.id}/hi</Link> */}
              </div>

              {/* Modal updated */}
              <label
                className="float-right p-1 text-gray-500 -mt-5 fa fa-ellipsis-h cursor-pointer hover:text-gray-100"
                htmlFor={`my-modal${getTweet.id}`}
              ></label>

              {/* Modal updated */}
            </div>
            <div className="pt-2">
              <p className="text-gray-500">{getTweet.tweet}</p>
              {getTweet.image ? (
                <picture>
                  <img
                    className="p-1 h-72 w-auto object-cover"
                    src={`${axios.defaults.baseURL}tweets/${getTweet.image}`}
                    alt=""
                  />
                </picture>
              ) : (
                ""
              )}

              <div className="flex justify-left mt-10">
                <div className="ml-3">
                  {getTweet.hide_comment == null ? (
                    <div className="flex justify-center">
                      <picture>
                        <img
                          className="w-5"
                          src="./icon/comment-slash-svgrepo-com.svg"
                          alt=""
                        />
                      </picture>
                      <span className="ml-2 text-gray-500">
                        comments disabled
                      </span>
                    </div>
                  ) : (
                    <div className="cursor-pointer text-gray-500">
                      <i className="fa fa-comments text-green-600 cursor-pointer"></i>
                      <span className="ml-2 ">0 comments</span>
                    </div>
                  )}
                </div>
              </div>
              {getTweet.hide_comment === null ? (
                ""
              ) : (
                <form>
                  <div className="flex mt-2">
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="block p-2.5 z-20 w-full text-sm text-gray-900 bg-transparent border-l-0 border-t-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none rounded-r-lg border"
                        placeholder="Add comment"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white  rounded-r-lg border-0 hover:bg-blue-800 duration-200 dark:hover:bg-blue-700 "
                      >
                        <i className="fa fa-send"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetTweet;

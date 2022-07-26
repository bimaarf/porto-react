import axios from "axios";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { CommentModal } from "../components/modal/CommentModal";
const GetTweet = ({ getTweet, index, tweetGetRequest }) => {
  const formComment = useRef(null);
  const [commentValue, setCommentValue] = useState();
  const [loadSubmit, setLoadSubmit] = useState(false);
  const inputComment = (e) => {
    e.persist();
    setCommentValue(e.target.value);
  };
  const commentNow = async (e) => {
    e.preventDefault();
    setLoadSubmit(true);
    const data = {
      user_hash: localStorage.getItem("auth_id"),
      tweet_id: getTweet.id,
      comments: commentValue,
    };
    if (!localStorage.getItem("auth_token")) {
      setLoadSubmit(true);
      toast.error("You must be logged in!");
      setTimeout(() => {
        setLoadSubmit(false);
      }, 1000);
    } else {
      if (commentValue.length < 3) {
        toast.warning("minimum 3 characters");
        setLoadSubmit(false);
      } else {
        await axios.get("/sanctum/csrf-cookie").then((res) => {
          axios.post(`api/tweet/comment/store`, data).then((res) => {
            toast.success("Comment added successfully");
            formComment.current.reset();
            setCommentValue();
            setLoadSubmit(false);
            tweetGetRequest();
          });
        });
      }
    }
  };

  return (
    <>
      <div
        key={index}
        className={`md:grid grid-cols-[20%_80%] w-full ${
          index % 3 === 0 ? "my-10" : ""
        }`}
      >
        <div className="text-gray-500 dark:text-gray-500 text-sm hidden md:block -mt-1">
          <i className="fa fa-clock-o"></i>
          <span className="ml-2">{getTweet.created_at}</span>
        </div>
        <div
          className={`border border-y-0 border-r-0 border-gray-200 dark:border-l-gray-800 mt-3.5 pb-6 ${
            index % 3 === 0 ? "border-gray-200 dark:border-b-gray-800 border-b" : ""
          }`}
        >
          <i className="fa fa-circle-o absolute -mt-3.5 text-gray-200 dark:text-gray-500 -ml-2"></i>
          <div className="md:ml-8 ml-3">
            <div className="flex justify-between">
              <div className="float-left">
                <h1 className=" absolute -mt-5 text-gray-700 dark:text-gray-300 font-semibold">
                  <i className="fa fa-twitter mr-1"></i>
                  {getTweet.user.name}
                </h1>
                <span className="text-2xs md:hidden text-gray-500">
                  {getTweet.created_at}
                </span>
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
                    className="p-1 max-h-96 w-full md:w-auto object-cover"
                    src={`${axios.defaults.baseURL}tweets/${getTweet.image}`}
                    alt=""
                  />
                </picture>
              ) : (
                ""
              )}

              <div className="flex justify-left mt-10">
                <div className="">
                  {getTweet.hide_comment == null ? (
                    <div className="flex justify-center">
                      <picture>
                        <img
                          className="w-5"
                          src={`${axios.defaults.baseURL}image/icon/comment-slash-svgrepo-com.svg`}
                          alt=""
                        />
                      </picture>
                      <span className="ml-2 text-sm text-gray-500">
                        comments disabled
                      </span>
                    </div>
                  ) : (
                    <div className="cursor-pointer text-gray-500">
                      <i className="fa fa-comments text-green-600 cursor-pointer"></i>
                      <span className="ml-2 text-sm">
                        {getTweet.comments.length} comments{" "}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {getTweet.hide_comment === null ? (
                ""
              ) : (
                <>
                  <div className="mt-10">
                    {getTweet.comments.map((comments, index) => (
                      <div
                        key={index}
                        className="border border-y-0 border-r-0 border-gray-200 dark:border-l-gray-800 mt-3.5 pb-6"
                      >
                        <i className="fa fa-circle-o absolute -mt-3.5 text-gray-500 -ml-2"></i>
                        <div className="md:ml-4 ml-3">
                          <div className="flex justify-between">
                            <div className="float-left">
                              <h1 className="-mt-4 text-gray-700 dark:text-gray-400 text-sm font-semibold">
                                <i className="fa fa-twitter mr-1"></i>
                                {comments.user.name}
                              </h1>
                              <span className="text-gray-600 text-2xs">
                                {comments.created_at}
                              </span>
                              <p className="text-gray-500 text-sm">
                                {comments.comments}
                              </p>
                            </div>
                            {comments.user_hash ===
                              localStorage.getItem("auth_id") || getTweet.user_hash === localStorage.getItem('auth_id') ? (
                              <div className="float-right text-gray-600 mr-10">
                                <label
                                  className="float-right p-1 text-gray-500 -mt-5 fa fa-ellipsis-h cursor-pointer hover:text-gray-100"
                                  htmlFor={`my-comment${comments.id}`}
                                ></label>
                              </div>
                            ) : ''}
                          </div>
                        </div>
                        {/* modal */}
                        <CommentModal
                          tweetGetRequest={tweetGetRequest}
                          commentId={comments.id}
                          commentMsg={comments.comments}
                          author={comments.user.name}
                        />
                        {/* modal end */}
                      </div>
                    ))}
                  </div>

                  <form ref={formComment} onSubmit={commentNow}>
                    <div className="flex mt-2">
                      <div className="relative w-full">
                        <input
                          onChange={inputComment}
                          type="text"
                          name="comment"
                          maxLength={150}
                          className="block p-2.5 z-20 w-full text-sm text-gray-900 bg-transparent border-l-0 border-t-0 border-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none rounded-r-lg border"
                          placeholder="Add comment"
                          required
                        />
                        <button
                          disabled={loadSubmit ? true : false}
                          type="submit"
                          className={`absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-700 dark:text-white  rounded-r-lg border-0 ${
                            loadSubmit
                              ? "duration-200 dark:bg-slate-900 "
                              : "hover:bg-blue-300 duration-200 dark:hover:bg-blue-800 "
                          }`}
                        >
                          {loadSubmit ? (
                            <svg
                              role="status"
                              className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                          ) : (
                            <i className="fa fa-send"></i>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetTweet;

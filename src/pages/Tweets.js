import React, { useEffect, useState, useRef } from "react";
import { FaComment, FaCommentSlash, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import GetTweet from "../data/GetTweet";
import "../tweet.css";
import { TweetModal } from "../components/modal/TweetModal";
const Tweets = () => {
  const [showTweetForm, setShowTweetForm] = useState(true);
  const [loadingTweets, setLoadingTweets] = useState(true);
  const [allDataLength, setAllDataLength] = useState();
  const [tweetLength, setTweetLength] = useState(6);
  const [getTweets, setGetTweets] = useState([]);
  const handleShowForm = () => {
    showTweetForm ? setShowTweetForm(false) : setShowTweetForm(true);
  };
  const handleMoreTweet = () => {
    setLoadingTweets(true);
    setTimeout(() => {
      console.log(allDataLength);
      setTweetLength(tweetLength + 6);
      setLoadingTweets(false);
    }, 500);
  };
  useEffect(() => {
    tweetGetRequest();
  }, []);
  const tweetGetRequest = async () => {
    try {
      await axios
        .get(`api/tweet/get`)
        .then((res) => {
          setLoadingTweets(false);
          setGetTweets(res.data);
          setAllDataLength(res.data.length);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  // form
  const form = useRef(null);
  const [loadSubmit, setLoadSubmit] = useState(false);
  const [hideComment, setHideComment] = useState("");
  const [imageFormat, setImageFormat] = useState();
  const [fileInput, setFileInput] = useState();
  const [formInput, setFormInput] = useState({
    tweet: "",
  });
  const handleInputFile = (e) => {
    const file = e.target.files[0];

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.error("Image format does not match!");
      setImageFormat(null);
    } else {
      setFileInput(e.target.files[0]);
      setImageFormat(URL.createObjectURL(file));
    }
  };
  const handleHideComment = () => {
    hideComment === "" ? setHideComment(1) : setHideComment("");
  };
  const handleInputForm = (e) => {
    e.persist();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (formInput.tweet === "") {
      setLoadSubmit(true);
      toast.error("Type something!");
      setTimeout(() => {
        setLoadSubmit(false);
      }, 1000);
      return false;
    }
    if (!localStorage.getItem("auth_token")) {
      setLoadSubmit(true);
      toast.error("You must be logged in!");
      setTimeout(() => {
        setLoadSubmit(false);
      }, 1000);
    } else {
      setLoadSubmit(true);
      const data = {
        user_hash: localStorage.getItem("auth_id"),
        tweet: formInput.tweet,
        image: fileInput,
        hide_comment: hideComment,
      };
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      axios.get("/sanctum/csrf-cookie").then((res) => {
        axios.post(`api/tweet/store`, data, config).then((res) => {
          if (res.data.status === 200) {
            form.current.reset();
            formInput.tweet = "";
            setImageFormat(null);
            setFileInput();
            toast.success("Successfully added a tweet!");
            tweetGetRequest();
          }
          setLoadSubmit(false);
        });
      });
    }
  };

  return (
    <>
      <div className="lg:container lg:mx-auto p-4 lg:px-60">
        <div className="my-4 text-white text-center">
          <h1 className="mt-4 text-2xl md:text-4xl font-bold">
            My Tweets and Opinions
          </h1>
          <p className="text-gray-500">My random thoughts about anything</p>
        </div>
        <div className="flex justify-between">
          <div className="text-white md:text-2xl flex items-center space-x-2 my-4">
            <i className="fa fa-book"></i>
            <p className="font-bold">My Tweets</p>
          </div>

          <div className="text-white md:text-sm flex items-center space-x-2 my-4">
            <i
              className={
                showTweetForm ? "fa fa-arrow-right" : "fa fa-arrow-left"
              }
            ></i>
            <button
              onClick={handleShowForm}
              className="font-semibold bg-blue-800 p-2 rounded-lg"
            >
              {showTweetForm ? "Hidden Form" : "Show Form"}
            </button>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------- */}
        <form
          ref={form}
          onSubmit={handleSubmitForm}
          hidden={showTweetForm ? false : true}
          className="mb-10"
        >
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                onChange={handleInputForm}
                value={handleInputForm.tweet}
                name="tweet"
                id="comment"
                rows="4"
                className="px-0 outline-none w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a tweet...."
                maxLength={255}
              ></textarea>
              <div className="flex justify-start">
                <picture>
                  <img
                    className="w-32"
                    src={imageFormat}
                    alt=""
                    onClick={() => {
                      if (imageFormat != null) {
                        setImageFormat(null);
                        setFileInput();
                      }
                    }}
                  />
                </picture>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                disabled={loadSubmit ? true : false}
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                <FaTwitter className="mr-1" />
                {loadSubmit ? (
                  <svg
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  "Post Tweet"
                )}
              </button>

              <div className="flex pl-0 space-x-1 sm:pl-2">
                <div className="inline-flex justify-center mx-2 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  {hideComment ? (
                    <FaComment
                      className=" cursor-pointer"
                      onClick={handleHideComment}
                    />
                  ) : (
                    <FaCommentSlash
                      className=" cursor-pointer"
                      onClick={handleHideComment}
                    />
                  )}
                </div>
                <div
                  id="image-upload"
                  className="inline-flex justify-center mx-2 text-gray-500 rounded  hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <label
                    className="fa fa-image cursor-pointer"
                    htmlFor="file-input"
                  ></label>

                  <input
                    type="file"
                    name="image"
                    id="file-input"
                    onChange={handleInputFile}
                    value={handleInputFile.fileInput}
                  />
                  <input
                    readOnly
                    type="text"
                    value={hideComment}
                    placeholder={hideComment}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <TweetForm
          tweetGetRequest={tweetGetRequest()}
          showTweetForm={showTweetForm}
        /> */}
        {getTweets
          .sort((b, a) => a.id - b.id)
          .slice(0, tweetLength)
          .map((getTweet, index) => (
            <div key={index}>
              <GetTweet getTweet={getTweet} index={index} />
              <TweetModal
                tweetId={getTweet.id}
                tweetBody={getTweet.tweet}
                tweetAuthor={getTweet.user.name}
                tweetImg={getTweet.image}
                tweetGetRequest={tweetGetRequest}
                user_hash={getTweet.user_hash}
              />
            </div>
          ))}
        {tweetLength >= allDataLength ? (
          <div className="outline-dotted outline-gray-800 outline-1 p-4 text-center">
            <p className="text-gray-500">No more tweets!</p>
          </div>
        ) : (
          <div className="flex justify-center mb-44">
            {allDataLength === 0 ? (
              <div className="outline-dotted outline-gray-800 outline-1 p-4">
                <p className="text-gray-500">Currently under development!</p>
              </div>
            ) : (
              <>
                {loadingTweets ? (
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
                  <button
                    onClick={handleMoreTweet}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      More Tweets
                    </span>
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Tweets;

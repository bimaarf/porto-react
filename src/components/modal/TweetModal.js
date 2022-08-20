import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const TweetModal = ({
  tweetId,
  tweetBody,
  tweetAuthor,
  tweetImg,
  tweetGetRequest,
  user_hash,
}) => {
  const [loadSubmit, setLoadSubmit] = useState();
  const deleteTweet = (e) => {
    setLoadSubmit(true);

    // console.log(e.target.value);
    // executed
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post(`api/tweet/delete/${e.target.value}`).then((res) => {
        if (res.data.status === 200) {
          tweetGetRequest();
          toast.success("Tweet deleted successfully");
          setLoadSubmit(false);
          document.getElementById("my-modal" + tweetId).click();
        } else {
          toast.error(
            `Injection failed You can't fucking delete this tweet 😡`
          );
          setLoadSubmit(false);
        }
      });
    });
  };
  return (
    <>
      <input
        type="checkbox"
        id={`my-modal${tweetId}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-300">
            <i className="fa fa-twitter"></i> {tweetAuthor}
          </h3>
          <p className="py-4 text-gray-300">{tweetBody}</p>
          {tweetImg && (
            <img
              className="w-full object-cover py-2"
              alt=""
              src={`${axios.defaults.baseURL}tweets/${tweetImg}`}
            />
          )}
          <div className="modal-action">
            {user_hash === localStorage.getItem("auth_id") && (
              <button
                disabled={loadSubmit ? true : false}
                onClick={deleteTweet}
                value={tweetId}
                className="btn bg-red-800 border-0 hover:bg-red-900 text-gray-300"
              >
                {loadSubmit ? "Process" : "Delete"}
              </button>
            )}
            <label
              id="close-modal-yay"
              htmlFor={`my-modal${tweetId}`}
              className="btn text-gray-300"
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const CommentModal = ({
  commentId,
  commentMsg,
  author,
  tweetGetRequest,
}) => {
  const [loadSubmit, setLoadSubmit] = useState();
  const deleteComment = (e) => {
    setLoadSubmit(true);

    // console.log(e.target.value);
    // executed
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post(`api/tweet/comment/delete/${e.target.value}`).then((res) => {
        if (res.data.status === 200) {
            tweetGetRequest();
          toast.success("Your comment was deleted");
          setLoadSubmit(false);
          document.getElementById("my-comment" + commentId).click();
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
        id={`my-comment${commentId}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-300">
            <i className="fa fa-twitter mr-1"></i>
            {author}
          </h3>
          <p className="py-4 text-gray-300">{commentMsg}</p>
          <div className="modal-action">
            <button
              disabled={loadSubmit ? true : false}
              onClick={deleteComment}
              value={commentId}
              className="btn bg-red-800 border-0 hover:bg-red-900 text-gray-300"
            >
              Delete
            </button>
            <label
              id="close-modal-yay"
              htmlFor={`my-comment${commentId}`}
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

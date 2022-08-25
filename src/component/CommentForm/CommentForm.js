import { useState, useEffect } from "react";
import axios from "axios";
import "./CommentForm.scss";

const CommentForm = ({ videoId }) => {
  const api_key = "c030675b-01c7-48a7-a76f-df45fa997cfc";
  const [commentText, setCommentText] = useState("");
  const userName = "Mohan Muruge";
  const newComment = { name: userName, comment: "" };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      newComment.comment = commentText;
      axios
        .post(
          `https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=${api_key}`,
          newComment
        )
        .then((response) => {
          setCommentText("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const commentChangeHandler = (event) => {
    setCommentText(event.target.value);
  };

  const isFormValid = () => {
    if (commentText === "") {
      return false;
    }
    return true;
  };
  return (
    <>
      <div className="comment-form-container">
        <div className="comment-form__img-container">
          <div className="comment-form__img"></div>
        </div>
        <form className="comment-form" onSubmit={submitHandler}>
          <div className="comment-form__search-container">
            <label htmlFor="#comment-field" className="form__sub-title">
              JOIN THE CONVERSATION
            </label>
            <input
              type="text"
              name="comment"
              onChange={commentChangeHandler}
              value={commentText}
              className="comment-form__text-input comment-form__text-input--comment"
              placeholder="Add a new comment"
            />
          </div>
          <button type="submit" className="comment-form__button">
            COMMENT
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;

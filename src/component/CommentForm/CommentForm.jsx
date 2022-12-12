import { useState } from "react";
import "./CommentForm.scss";

const CommentForm = ({ videoId, commentSubmitHandler }) => {
  // Create state to update comment text input on change
  const [commentText, setCommentText] = useState("");
  // User Name for "Logged" in user
  const userName = "Max Wanless";
  // Function to update comment text input on change
  const commentChangeHandler = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <>
      <div className="comment-form-container">
        <div className="comment-form__img-container">
          <div className="comment-form__img"></div>
        </div>
        <form
          className="comment-form"
          onSubmit={(event) => {
            commentSubmitHandler(event, videoId, userName, commentText);
            setCommentText("");
          }}
        >
          <div className="comment-form__search-container">
            <label htmlFor="#comment-field" className="comment-form__sub-title">
              JOIN THE CONVERSATION
            </label>
            <textarea
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

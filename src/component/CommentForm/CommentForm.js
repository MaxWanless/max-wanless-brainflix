import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <>
      <div className="comment-form-container">
        <div className="comment-form__img-container">
          <div className="comment-form__img"></div>
        </div>
        <form className="comment-form">
          <div className="comment-form__search-container">
            <label htmlFor="#comment-field" className="form__sub-title">
              JOIN THE CONVERSATION
            </label>
            <textarea
              id="comment-comment-field"
              type=""
              className="comment-form__text-input comment-form__text-input--comment"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="comment-form__button">COMMENT</button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;

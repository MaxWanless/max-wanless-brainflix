import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <>
      <div class="form-container">
        <div class="form__img-container">
          <div class="form__img"></div>
        </div>
        <form class="form">
          <label for="#comment-field" class="form__sub-title">
            JOIN THE CONVERSATION
          </label>
          <textarea
            id="comment-field"
            type=""
            class="form__text-input form__text-input--comment"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
          <button class="form__button">COMMENT</button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;

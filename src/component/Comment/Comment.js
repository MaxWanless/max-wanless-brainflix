import "./Comment.scss";

const Comment = () => {
  return (
    <div class="comment">
      <div class="comment__img-container">
        <div class="comment__img"></div>
      </div>
      <div class="comment__content">
        <div class="comment__header-container">
          <h4 class="comment__header-text--bold">Connor Walton</h4>
          <p class="comment__header-text--time">1 year ago</p>
        </div>
        <div class="comment__text-container">
          <p class="comment__content-text">
            This is art. This is inexplicable magic expressed in the purest way,
            everything that makes up this majestic work deserves reverence. Let
            us appreciate this for what it is and what it contains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

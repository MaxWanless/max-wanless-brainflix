import "./Comment.scss";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__img-container">
        <div className="comment__img"></div>
      </div>
      <div className="comment__content">
        <div className="comment__header-container">
          <h4 className="comment__header-text--bold">Connor Walton</h4>
          <p className="comment__header-text--time">1 year ago</p>
        </div>
        <div className="comment__text-container">
          <p className="comment__content-text">
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

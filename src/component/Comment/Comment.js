import "./Comment.scss";

const Comment = (props) => {
  const formatDate = (timeStamp) => {
    let postDate = new Date();
    let day = String(postDate.getDate()).padStart(2, "0");
    let month = String(postDate.getMonth() + 1).padStart(2, "0");
    let year = postDate.getFullYear();
    postDate = day + "/" + month + "/" + year;
    return postDate
  };
  return (
    <div className="comment">
      <div className="comment__img-container">
        <div className="comment__img"></div>
      </div>
      <div className="comment__content">
        <div className="comment__header-container">
          <h4 className="comment__header-text--bold">{props.video.name}</h4>
          <p className="comment__header-text--time">{formatDate(props.video.timestamp)}</p>
        </div>
        <div className="comment__text-container">
          <p className="comment__content-text">{props.video.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

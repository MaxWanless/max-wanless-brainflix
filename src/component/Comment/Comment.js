import "./Comment.scss";

const Comment = (props) => {
  let { videoId, deleteCommentHandler } = props;
  let { comment, name, timestamp, id, likes } = props.comment;
  const formatDate = (timeStamp) => {
    //Calculate time difference from now to post time in seconds
    const seconds = Math.floor((new Date() - timeStamp) / 1000);
    // Years
    let interval = seconds / 31536000;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " year  ago";
      } else {
        return Math.floor(interval) + " years  ago";
      }
    }
    //Months
    interval = seconds / 2592000;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " month  ago";
      } else {
        return Math.floor(interval) + " months  ago";
      }
    }
    //days
    interval = seconds / 86400;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " day  ago";
      } else {
        return Math.floor(interval) + " days  ago";
      }
    }
    // Hours
    interval = seconds / 3600;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " hour  ago";
      } else {
        return Math.floor(interval) + " hours  ago";
      }
    }
    // Minutes
    interval = seconds / 60;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " minute  ago";
      } else {
        return Math.floor(interval) + " minutes  ago";
      }
    }
    //30 seconds ago
    interval = seconds;
    if (interval > 30) {
      return " 30 seconds  ago";
    }
    //Catch all just now
    return "Just now";
  };

  return (
    <div className="comment">
      <div className="comment__img-container">
        <div className="comment__img"></div>
      </div>
      <div className="comment__content">
        <div className="comment__header-container">
          <h4 className="comment__header-text--bold">{name}</h4>
          <p className="comment__header-text--time">{formatDate(timestamp)}</p>
        </div>
        <div className="comment__text-container">
          <p className="comment__content-text">{comment}</p>
        </div>
        <div className="comment__interaction-container">
          <p className="comment__interaction-text">{`Likes: ${likes}`}</p>
          <button className="comment__interaction-button--like">👍</button>
          <button
            className="comment__interaction-button--delete"
            onClick={() => deleteCommentHandler(videoId, id)}
          >
            🚫
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;

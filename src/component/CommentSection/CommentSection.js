import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

const CommentSection = (props) => {
  return (
    <div className="comment-section">
      <h4>{props.videoDetails[props.currentVideo].comments.length + " Comments"}</h4>
      <CommentForm />
      {props.videoDetails[props.currentVideo].comments.map((comment, index) => (
        <Comment key={index} video={comment} />
      ))}
    </div>
  );
};

export default CommentSection;

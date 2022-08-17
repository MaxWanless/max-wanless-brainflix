import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment"

const CommentSection = () => {
  return (
    <div className="comment-section">
      <h4>3 Comments</h4>
      <CommentForm />
      <Comment />
      <Comment />
      <Comment/>
    </div >
  );
};

export default CommentSection;

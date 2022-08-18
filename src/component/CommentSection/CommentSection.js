import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import { v4 as uuidv4} from 'uuid'

const CommentSection = (props) => {
  console.log(props)
  return (
    <div className="comment-section">
      <h4>{props.videoDetails[props.currentVideo].comments.length + " Comments"}</h4>
      <CommentForm />
      {props.videoDetails[props.currentVideo].comments.map((comment, index) => (
        <Comment key={uuidv4()} video={comment} />
      ))}
    </div>
  );
};

export default CommentSection;

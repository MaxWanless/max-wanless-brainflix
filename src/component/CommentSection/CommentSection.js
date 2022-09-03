import { useState, useEffect } from "react";
import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import axios from "axios";

const CommentSection = ({ currentVideo }) => {
  // Create state to recall API on comment delete
  const [deleteComment, setDeleteComment] = useState(true);
  // Create state to recall API on comment Like
  const [likeComment, setlikeComment] = useState(true);
  // Create state to recall API on comment submit
  const [submitComment, setSubmitComment] = useState(true);
  //Create state to hold comment Array
  const [commentArr, setCommentArr] = useState([]);

  // Use effect to refresh the comment section on interaction
  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos/${currentVideo.id}/comments`)
      .then((response) => {
        setCommentArr(response.data);
      })
      .catch((error) => {
        console.log(currentVideo.id);
        setTimeout(() => {
          console.log(error);
        }, 3000);
      });
  }, [currentVideo, deleteComment, submitComment, likeComment]);

  // Function to handle the deletion of a comment
  const deleteCommentHandler = (videoId, id) => {
    axios
      .delete(`http://localhost:8080/videos/${videoId}/comments/${id}`)
      .then((response) => {
        setDeleteComment(!deleteComment);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle the liking a comment
  const likeCommentHandler = (videoId, commentId) => {
    axios
      .put(`http://localhost:8080/videos/${videoId}/comments/${commentId}`)
      .then((response) => {
        setlikeComment(!likeComment);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle the submition of a new comment
  const commentSubmitHandler = (event, videoId, userName, commentText) => {
    event.preventDefault();
    const isFormValid = () => {
      if (commentText === "") {
        return false;
      }
      return true;
    };
    // Check to see if the form fields are valid
    if (isFormValid()) {
      axios
        .post(`http://localhost:8080/videos/${videoId}/comments`, {
          name: userName,
          comment: commentText,
        })
        .then((response) => {
          setSubmitComment(!submitComment);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  return (
    <div className="comment-section">
      <h4>{commentArr.length + " Comments"}</h4>
      <CommentForm
        videoId={currentVideo.id}
        commentSubmitHandler={commentSubmitHandler}
      />
      {commentArr.length > 0 ? (
        commentArr
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              videoId={currentVideo.id}
              deleteCommentHandler={deleteCommentHandler}
              likeCommentHandler={likeCommentHandler}
            />
          ))
      ) : (
        <div className="empty-comments">NO COMMENTS</div>
      )}
    </div>
  );
};

export default CommentSection;

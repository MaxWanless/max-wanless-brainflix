import "./MainVideo.scss";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDescription from "../../component/VideoDescription/VideoDescription";
import CommentSection from "../../component/CommentSection/CommentSection";
import VideoList from "../../component/VideoList/VideoList";

function MainVideo({ videos }) {
  const api_key = "c030675b-01c7-48a7-a76f-df45fa997cfc";
  const [deleteComment, setDeleteComment] = useState(true);
  const [submitComment, setSubmitComment] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);
  const { videoId } = useParams();
  if (videoId && videoId !== currentVideoId) {
    setCurrentVideoId(videoId);
  } else if (!videoId && currentVideoId !== videos[0].id) {
    setCurrentVideoId(videos[0].id);
  }
  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=${api_key}`
      )
      ?.then((response) => {
        setCurrentVideo(response.data);
        setLoading(false);
      });
  }, [currentVideoId, deleteComment, submitComment]);

  const deleteCommentHandler = (videoId, id) => {
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${videoId}/comments/${id}?api_key=${api_key}`
      )
      .then((response) => {
        setDeleteComment(!deleteComment);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const commentSubmitHandler = (event, videoId, userName, commentText) => {
    event.preventDefault();
    const isFormValid = () => {
      if (commentText === "") {
        return false;
      }
      return true;
    };

    if (isFormValid()) {
      axios
        .post(
          `https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=${api_key}`,
          { name: userName, comment: commentText }
        )
        .then((response) => {
          setSubmitComment(!submitComment);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h1 className="loading__title">Loading</h1>
        <div class="loading__dots-container">
          <div class="loading__dots"></div>
          <div class="loading__dots"></div>
          <div class="loading__dots"></div>
          <div class="loading__dots"></div>
          <div class="loading__dots"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <VideoPlayer currentVideo={currentVideo} />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription currentVideo={currentVideo} />
            <CommentSection
              currentVideo={currentVideo}
              deleteCommentHandler={deleteCommentHandler}
              commentSubmitHandler={commentSubmitHandler}
            />
          </div>
          <div className="lower__video-list">
            <VideoList currentVideoId={currentVideoId} videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;

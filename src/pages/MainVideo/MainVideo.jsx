import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./MainVideo.scss";

// Components
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDescription from "../../component/VideoDescription/VideoDescription";
import CommentSection from "../../component/CommentSection/CommentSection";
import VideoList from "../../component/VideoList/VideoList";
import { VideoContext } from "../../context/videoContext";
import { CurrentVideoContext } from "../../context/currentVideoContext";

function MainVideo() {
  const { videos } = useContext(VideoContext);
  const {
    loading,
    currentVideo,
    axiosFailed,
    currentVideoId,
    setCurrentVideoId,
  } = useContext(CurrentVideoContext);
  // Create Variable to hold video Id from address bar
  const { videoId } = useParams();
  // If there is a id from the URL and it doesnt match the
  //current Id set current Id to URL id if no URL id set to default video Id
  if (videoId && videoId !== currentVideoId) {
    setCurrentVideoId(videoId);
  } else if (!videoId && currentVideoId !== videos[0].id) {
    setCurrentVideoId(videos[0].id);
  }

  // If still waiting for API response show loader if not navigate to 404 page
  if (loading && !axiosFailed) {
    return (
      <div className="loading">
        <h1 className="loading__title">Loading</h1>
        <div className="loading__dots-container">
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
        </div>
      </div>
    );
  }
  if (loading && axiosFailed) {
    return <Navigate to="/Video-not-found" />;
  }

  return (
    <>
      <VideoPlayer currentVideo={currentVideo} />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription currentVideo={currentVideo} />
            <CommentSection currentVideo={currentVideo} />
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

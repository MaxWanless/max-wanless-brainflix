import "./MainVideo.scss";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDescription from "../../component/VideoDescription/VideoDescription";
import CommentSection from "../../component/CommentSection/CommentSection";
import VideoList from "../../component/VideoList/VideoList";
// `https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=${api_key}`

function MainVideo({ videos, api_key }) {
  // Create state hold current video data
  const [currentVideo, setCurrentVideo] = useState(null);
  // Create state to control page loading while waiting for API
  const [isLoading, setLoading] = useState(true);
  // Create state to redirect to 404 page if API call fails
  const [axiosFailed, setAxiosFailed] = useState(false);
  // Create state to hold current video Id
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);
  // Create Variable to hold video Id from address bar
  const { videoId } = useParams();
  // If there is a id from the URL and it doesnt match the
  //current Id set current Id to URL id if no URL id set to default video Id
  if (videoId && videoId !== currentVideoId) {
    setCurrentVideoId(videoId);
  } else if (!videoId && currentVideoId !== videos[0].id) {
    setCurrentVideoId(videos[0].id);
  }

  // On page load, comment submission or deletion call API, If API call fails Navigate to 404 page
  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos/${currentVideoId}`)
      ?.then((response) => {
        setCurrentVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setTimeout(() => {
          console.log("setTimeout");
          setAxiosFailed(true);
        }, 2000);
      });
  }, [currentVideoId]);

  // If still waiting for API response show loader if not navigate to 404 page
  if (isLoading && !axiosFailed) {
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
  if (isLoading && axiosFailed) {
    return <Navigate to="/Video-not-found" />;
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

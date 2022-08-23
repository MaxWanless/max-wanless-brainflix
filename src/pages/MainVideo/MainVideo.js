import "./MainVideo.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDescription from "../../component/VideoDescription/VideoDescription";
import CommentSection from "../../component/CommentSection/CommentSection";
import VideoList from "../../component/VideoList/VideoList";
import videoDetails from "../../data/video-details.json";

function MainVideo() {
  const [currentVideoId, setCurrentVideo] = useState(videoDetails[0].id);
  return (
    <>
      <VideoPlayer
        currentVideoId={currentVideoId}
        videoDetails={videoDetails}
      />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription
              currentVideoId={currentVideoId}
              videoDetails={videoDetails}
            />
            <CommentSection
              currentVideoId={currentVideoId}
              videoDetails={videoDetails}
            />
          </div>
          <div className="lower__video-list">
            <VideoList currentVideoId={currentVideoId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;

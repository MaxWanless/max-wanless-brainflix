import "./MainVideo.scss";
import { useState } from "react";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDescription from "../../component/VideoDescription/VideoDescription";
import CommentSection from "../../component/CommentSection/CommentSection";
import VideoList from "../../component/VideoList/VideoList";
import videoDetailsData from "../../data/video-details.json";

function MainVideo() {
  const [currentVideoId, setCurrentVideo] = useState(videoDetailsData[0].id);

  return (
    <>
      <VideoPlayer  currentVideoId={currentVideoId} />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription
              currentVideoId={currentVideoId}
            />
            <CommentSection
              currentVideoId={currentVideoId}
            />
          </div>
          <div className="lower__video-list">
            <VideoList
              currentVideoId={currentVideoId}
              setCurrentVideo={setCurrentVideo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
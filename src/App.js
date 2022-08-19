import "./App.scss";
import { useState } from "react";
import Header from "./component/Header/Header";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";
import VideoDescription from "./component/VideoDescription/VideoDescription";
import CommentSection from "./component/CommentSection/CommentSection";
import VideoList from "./component/VideoList/VideoList";
import videoDetailsData from "./data/video-details.json";

function App() {
  const [videoDetails, setvideoDetails] = useState(videoDetailsData);
  const [currentVideoId, setCurrentVideo] = useState(videoDetailsData[0].id);
  const videoSelector = (event, id) => {
    event.preventDefault();
    let currentVideo = videoDetailsData.find((video) => video.id === id);
    setCurrentVideo(currentVideo.id);
  };
  return (
    <>
      <Header />
      <VideoPlayer videoList={videoDetails} currentVideoId={currentVideoId} />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription
              videoDetails={videoDetails}
              currentVideoId={currentVideoId}
            />
            <CommentSection
              videoDetails={videoDetails}
              currentVideoId={currentVideoId}
            />
          </div>
          <div className="lower__video-list">
            <VideoList
              currentVideoId={currentVideoId}
              videoSelector={videoSelector}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

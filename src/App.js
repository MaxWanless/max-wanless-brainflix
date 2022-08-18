import "./App.scss";
import { useState } from "react";
import Header from "./component/Header/Header";
import VideoDescription from "./component/VideoDescription/VideoDescription";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";
import CommentSection from "./component/CommentSection/CommentSection";
import VideoList from "./component/VideoList/VideoList";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoSelector = (event, index) => {
    event.preventDefault();
    setCurrentVideo(index);
  };

  return (
    <>
      <Header />
      <VideoPlayer videoList={videoDetails} currentVideo={currentVideo} />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription
              videoDetails={videoDetails}
              currentVideo={currentVideo}
            />
            <CommentSection
              videoDetails={videoDetails}
              currentVideo={currentVideo}
            />
          </div>
          <div className="lower__video-list">
            <VideoList
              videoList={videos}
              currentVideo={currentVideo}
              videoSelector={videoSelector}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

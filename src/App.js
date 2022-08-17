import "./App.scss";
import { useState } from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import VideoDescription from "./component/VideoDescription/VideoDescription";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";
import CommentSection from "./component/CommentSection/CommentSection";
import VideoList from "./component/VideoList/VideoList";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

function App() {

  const [currentVideo, setCurrentVideo] = useState(0)

  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoDescription />
      <CommentSection />
      <VideoList videoList={videos} />
      <Footer />
    </>
  );
}

export default App;

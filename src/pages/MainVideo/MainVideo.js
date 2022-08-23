import "./MainVideo.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDescription from "../../component/VideoDescription/VideoDescription";
import CommentSection from "../../component/CommentSection/CommentSection";
import VideoList from "../../component/VideoList/VideoList";

function MainVideo({ videos }) {
  const api_key = "c030675b-01c7-48a7-a76f-df45fa997cfc";
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setLoading] = useState(true);

  let currentVideoId = videos[0].id;


  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=${api_key}`
      )
      .then((response) => {
        setCurrentVideo(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <VideoPlayer
        currentVideo={currentVideo}
      />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription
              currentVideo={currentVideo}
            />
            <CommentSection
              currentVideo={currentVideo}
            />
          </div>
          <div className="lower__video-list">
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;

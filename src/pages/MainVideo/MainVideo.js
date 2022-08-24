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
  }, [currentVideoId]);

  if (isLoading) {
    return (
      <div className="page-loader">
        <div className="page-loader__text">...Loading</div>
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

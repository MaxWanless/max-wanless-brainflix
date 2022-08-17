import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";

const VideoList = () => {
  return (
    <div className="video-list">
      <h3>NEXT VIDEOS</h3>
      <VideoCard />
    </div>
  );
};

export default VideoList;

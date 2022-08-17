import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";

const VideoList = (props) => {
  return (
    <div className="video-list">
      <h3>NEXT VIDEOS</h3>
      {props.videoList.map(video => <VideoCard key={video.id} video={video}/>)}
    </div>
  );
};

export default VideoList;

import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";

const VideoList = (props) => {
  let { currentVideo, videoList, videoSelector } = props;
  return (
    <div className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      {videoList.map((video, index) => (
        <VideoCard
          key={video.id}
          video={video}
          currentVideo={currentVideo}
          videoSelector={videoSelector}
          index={index}
        />
      ))}
    </div>
  );
};

export default VideoList;

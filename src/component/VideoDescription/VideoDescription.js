import "./VideoDescription.scss";
import VideoData from "../VideoData/VideoData";

const VideoDescription = (props) => {
  let { currentVideo, videoDetails } = props;
  return (
    <div className="video-description">
      <VideoData videoDetails={videoDetails} currentVideo={currentVideo} />
      <p className="video-description__text">
        {videoDetails[currentVideo].description}
      </p>
    </div>
  );
};

export default VideoDescription;

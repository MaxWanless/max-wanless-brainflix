import "./VideoDescription.scss";
import VideoData from "../VideoData/VideoData";

const VideoDescription = (props) => {
  return (
    <div className="video-description">
      <VideoData
        videoDetails={props.videoDetails}
        currentVideo={props.currentVideo}
      />
      <p className="video-description__text">
        {props.videoDetails[props.currentVideo].description}
      </p>
    </div>
  );
};

export default VideoDescription;

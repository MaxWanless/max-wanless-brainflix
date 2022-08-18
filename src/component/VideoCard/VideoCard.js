import "./VideoCard.scss";

const VideoCard = (props) => {
  console.log(props)
  let {currentVideo, index, video, videoSelector} = props
  return (
    <div
      onClick={(event) => videoSelector(event, index)}
      className={`video-card ${
        index === currentVideo ? "video-card--active" : ""
      }`}
    >
      <div className="video-card__container">
        <img className="video-card__container-img" src={video.image} alt="Video thumbnail"/>
      </div>
      <div className="video-card__content-container">
        <p className="video-card__content-container-title">
          {video.title}
        </p>
        <p className="video-card__content-container-channel">
          {video.channel}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

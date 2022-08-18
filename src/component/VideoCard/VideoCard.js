import "./VideoCard.scss";

const VideoCard = (props) => {
  return (
    <div
      onClick={(event) => props.videoSelector(event, props.index)}
      className={`video-card ${
        props.index === props.currentVideo ? "video-card--active" : ""
      }`}
    >
      <div className="video-card__container">
        <img className="video-card__container-img" src={props.video.image} alt="Video thumbnail"/>
      </div>
      <div className="video-card__content-container">
        <p className="video-card__content-container-title">
          {props.video.title}
        </p>
        <p className="video-card__content-container-channel">
          {props.video.channel}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

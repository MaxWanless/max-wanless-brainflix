import "./VideoCard.scss";

const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-card__container">
        <img
          className="video-card__container-img"
          src="https://i.imgur.com/5qyCZrD.jpg"
        />
      </div>
      <div className="video-card__content-container">
        <p className="video-card__content-container-title">
          Become A Travel Pro In One Easy Lesson
        </p>
        <p className="video-card__content-container-channel">Todd Welch</p>
      </div>
    </div>
  );
};

export default VideoCard;

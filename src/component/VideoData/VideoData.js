import "./VideoData.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

const VideoData = (props) => {
  return (
    <div className="video-data">
      <h1 className="video-data__title">BMX Rampage: 2021 Highlights</h1>
      <div className="video-data__container">
        <div className="video-data-info">
          <div className="video-data-info__container">
            <p className="video-data-info__text video-data-info__text--bold">
              By Red Crow
            </p>
          </div>
          <div className="video-data-info__container">
            <p className="video-data-info__text">07/11/2021</p>
          </div>
        </div>
        <div className="video-data-info">
          <div className="video-data-info__container">
            <img
              className="video-data-info__icon"
              src={viewsIcon}
              alt="views icon"
            />
            <p className="video-data-info__text">1,001,023</p>
          </div>
          <div className="video-data-info__container">
            <img
              className="video-data-info__icon"
              src={likesIcon}
              alt="likes icon"
            />
            <p className="video-data-info__text">110,985</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoData;

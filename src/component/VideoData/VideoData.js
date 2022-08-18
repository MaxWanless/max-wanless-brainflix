import "./VideoData.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

const VideoData = (props) => {
  const formatDate = (timeStamp) => {
    let postDate = new Date();
    let day = String(postDate.getDate()).padStart(2, "0");
    let month = String(postDate.getMonth() + 1).padStart(2, "0");
    let year = postDate.getFullYear();
    postDate = day + "/" + month + "/" + year;
    return postDate
  };
  return (
    <div className="video-data">
      <h1 className="video-data__title">{props.videoDetails[props.currentVideo].title}</h1>
      <div className="video-data__container">
        <div className="video-data-info">
          <div className="video-data-info__container">
            <p className="video-data-info__text video-data-info__text--bold">
              {`By ${props.videoDetails[props.currentVideo].channel}`}
            </p>
          </div>
          <div className="video-data-info__container">
            <p className="video-data-info__text">{formatDate(props.videoDetails[props.currentVideo].timestamp)}</p>
          </div>
        </div>
        <div className="video-data-info">
          <div className="video-data-info__container">
            <img
              className="video-data-info__icon"
              src={viewsIcon}
              alt="views icon"
            />
            <p className="video-data-info__text">{props.videoDetails[props.currentVideo].views}</p>
          </div>
          <div className="video-data-info__container">
            <img
              className="video-data-info__icon"
              src={likesIcon}
              alt="likes icon"
            />
            <p className="video-data-info__text">{props.videoDetails[props.currentVideo].likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoData;

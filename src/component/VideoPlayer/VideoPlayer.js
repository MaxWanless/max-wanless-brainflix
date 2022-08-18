import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  let { currentVideo, videoList } = props;
  return (
    <div className="player__container">
      <video
        className="player"
        controls
        poster={videoList[currentVideo].image}
      ></video>
    </div>
  );
};

export default VideoPlayer;

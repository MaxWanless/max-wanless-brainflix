import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  return (
    <div className="player__container">
      <video className="player" controls poster={props.videoList[props.currentVideo].image}></video>
    </div>
  );
};

export default VideoPlayer;

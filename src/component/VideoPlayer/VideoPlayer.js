import "./VideoPlayer.scss";

const VideoPlayer = () => {
  return (
    <div className="player__container">
      <video
        className="player"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
      ></video>
    </div>
  );
};

export default VideoPlayer;

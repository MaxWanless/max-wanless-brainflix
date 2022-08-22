import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  let { currentVideoId, videoDetails } = props;
  let video = videoDetails.find((video) => video.id === currentVideoId);
  return (
    <div className="player__container">
      <video className="player" controls poster={video.image}></video>
    </div>
  );
};
export default VideoPlayer;

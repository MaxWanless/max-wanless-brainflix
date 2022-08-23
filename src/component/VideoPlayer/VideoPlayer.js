import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  let { currentVideo } = props;
  // let video = videoDetails?.find((video) => video.id === currentVideoId);
  return (
    <div className="player__container">
      <video className="player" controls poster={currentVideo.image}></video>
    </div>
  );
};
export default VideoPlayer;

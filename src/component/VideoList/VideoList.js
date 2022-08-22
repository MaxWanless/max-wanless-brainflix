import "./VideoList.scss";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import VideoCard from "../VideoCard/VideoCard";
import videos from "../../data/videos.json";

const VideoList = (props) => {
  let { currentVideoId } = props;
  return (
    <div className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      {videos?.map((video) => (
        <Link key={uuidv4()} to={`/${video.id}`}>
          <VideoCard
            key={video.id}
            video={video}
            currentVideoId={currentVideoId}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;

import "./UploadVideo.scss";
import { Link } from "react-router-dom";
import UploadForm from "../../component/UploadForm/UploadForm";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";

function UploadVideo() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <p className="upload__label">VIDEO THUMBNAIL</p>
      <img className="upload__thumbnail" src={videoThumbnail} />
      <UploadForm />
      <Link to="/" className="upload__cancel">
        CANCEL
      </Link>
    </div>
  );
}

export default UploadVideo;

import "./UploadVideo.scss";
import UploadForm from "../../component/UploadForm/UploadForm";


function UploadVideo() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <UploadForm />
    </div>
  );
}

export default UploadVideo;

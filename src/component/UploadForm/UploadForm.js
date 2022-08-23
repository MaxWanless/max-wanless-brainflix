import "./UploadForm.scss";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";

function UploadForm() {
  return (
    <>
      <div className="upload__container">

        <div className="thumbnail">
          <p className="thumbnail__label">VIDEO THUMBNAIL</p>
          <div className="thumbnail__img"></div>
        </div>

        <form className="form">
          <label className="form__label" htmlFor="#title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="form__input"
            type="text"
            id="title"
            name="title"
            placeholder="Add a title to your video"
          />
          <label className="form__label" htmlFor="#description">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="form__input form__input--description"
            type="text"
            id="description"
            name="description"
            placeholder="Add a description to your video"
          />
        </form>
      </div>
      <div className="button__container">
        <button className="button">PUBLISH</button>
        <Link to="/" className="button__cancel">
          CANCEL
        </Link>
      </div>
    </>
  );
}

export default UploadForm;

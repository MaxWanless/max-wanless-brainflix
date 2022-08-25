import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./UploadForm.scss";

function UploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const isTitleValid = () => {
    if (title) {
      return true;
    }
    return false;
  };
  const isDescriptionValid = () => {
    if (description) {
      return true;
    }
    return false;
  };
  const isFormValid = () => {
    if (isTitleValid() && isDescriptionValid()) {
      return true;
    }
    return false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      setTitle("");
      setDescription("");
      alert("Video Uploaded Successfully");
      navigateHome();
    }
  };

  const navigateHome = () => {
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="upload__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="thumbnail">
            <p className="thumbnail__label">VIDEO THUMBNAIL</p>
            <div className="thumbnail__img"></div>
          </div>
          <label className="form__label" htmlFor="#title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="form__input"
            type="text"
            id="title"
            name="title"
            placeholder="Add a title to your video"
            onChange={handleChangeTitle}
            value={title}
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
            onChange={handleChangeDescription}
            value={description}
          />
          <div className="button__container">
            <button type="submit" className="button">
              PUBLISH
            </button>
            <Link to="/" className="button__cancel">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UploadForm;

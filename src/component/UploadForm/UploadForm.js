import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./UploadForm.scss";

function UploadForm() {
  // Create state to update title input text on change
  const [title, setTitle] = useState("");
  // Create state to update description input text on change
  const [description, setDescription] = useState("");
  // Create state to trigger page redirect on succesfull Upload
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Create state to update when Title input data is valid
  const [titleValid, setTitleValid] = useState(true);
  // Create state to update when description input data is valid
  const [titleDescription, setDescriptionValid] = useState(true);

  // Function to update Title text input on change
  const handleChangeTitle = (event) => {
    setTitleValid(true);
    setTitle(event.target.value);
  };
  // Function to update Description text input on change
  const handleChangeDescription = (event) => {
    setDescriptionValid(true);
    setDescription(event.target.value);
  };
  // Function to check if title input value is valid
  const isTitleValid = () => {
    if (title) {
      return true;
    }
    return false;
  };
  // Function to check if description input value is valid
  const isDescriptionValid = () => {
    if (description) {
      return true;
    }
    return false;
  };
  // Function to check if form is valid
  const isFormValid = () => {
    if (isTitleValid() && isDescriptionValid()) {
      return true;
    }
    return false;
  };
  // Function to handle the submition of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      setTitle("");
      setDescription("");
      navigateSuccessPage();
    } else {
      if (!isDescriptionValid()) {
        setDescriptionValid(false);
      }
      if (!isTitleValid()) {
        setTitleValid(false);
      }
    }
  };
  // Function to set formsubmitted state on successful submision
  const navigateSuccessPage = () => {
    setFormSubmitted(true);
  };
  // If the form has been successfully submitted navigate successfull upload screen
  if (formSubmitted) {
    return <Navigate to="/Upload/Success" />;
  }

  return (
    <>
      <div className="upload__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="test-container">
            <div className="thumbnail">
              <p className="thumbnail__label">VIDEO THUMBNAIL</p>
              <div className="thumbnail__img"></div>
            </div>
            <div className="form__input-container">
              <label className="form__label" htmlFor="#title">
                TITLE YOUR VIDEO
              </label>
              <input
                className={`form__input${
                  titleValid ? "" : " form__input--invalid"
                }`}
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
              <textarea
                className={`form__input form__input--description${
                  titleDescription ? "" : " form__input--invalid"
                }`}
                rows="5"
                id="description"
                name="description"
                placeholder="Add a description to your video"
                onChange={handleChangeDescription}
                value={description}
              />
            </div>
          </div>
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

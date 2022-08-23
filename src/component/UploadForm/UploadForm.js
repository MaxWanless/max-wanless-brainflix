import "./UploadForm.scss";

function UploadForm() {
  return (
    <>
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
        <button className="form__button">PUBLISH</button>
      </form>
    </>
  );
}

export default UploadForm;

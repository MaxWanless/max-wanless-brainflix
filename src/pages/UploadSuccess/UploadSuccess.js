import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./UploadSuccess.scss";

function UploadSuccess() {
  // Create state to trigger upload complete
  const [uploadComplete, setUploadComplete] = useState(false);

  useEffect(() => {
    // simulate video upload,  set uploadComplete state after 2 seconds
    setTimeout(() => {
      setUploadComplete(true);
    }, 2000);
  }, []);

  // Redirect to home page when upload complete
  if (uploadComplete) {
    return <Navigate to="/" />;
  }

  return (
    <div className="loading">
      <h1 className="loading__title">Video upload successful redirecting</h1>
      <div className="loading__dots-container">
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
      </div>
    </div>
  );
}

export default UploadSuccess;

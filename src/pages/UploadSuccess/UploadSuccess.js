import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./UploadSuccess.scss";

function UploadSuccess() {
  const [uploadComplete, setUploadComplete] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      console.log("setTimeout");
      setUploadComplete(true);
    }, 2000);
  }, []);

  if (uploadComplete) {
    return <Navigate to="/" />;
  }

  return (
    <div className="loading">
      <h1 className="loading__title">Video upload successful redirecting</h1>
      <div class="loading__dots-container">
        <div class="loading__dots"></div>
        <div class="loading__dots"></div>
        <div class="loading__dots"></div>
        <div class="loading__dots"></div>
        <div class="loading__dots"></div>
      </div>
    </div>
  );
}

export default UploadSuccess;

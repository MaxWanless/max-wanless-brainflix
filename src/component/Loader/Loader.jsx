import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loading">
      <h1 className="loading__title">Loading</h1>
      <div className="loading__dots-container">
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
        <div className="loading__dots"></div>
      </div>
    </div>
  );
};

export default Loader;

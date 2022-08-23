import "./App.scss";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainVideo />} />
          <Route path="/:videoId" element={<MainVideo />} />
          <Route path="Upload" element={<UploadVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

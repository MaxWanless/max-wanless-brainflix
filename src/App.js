import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

function App() {
  const api_key = "c030675b-01c7-48a7-a76f-df45fa997cfc";
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${api_key}`)
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainVideo videos={videos} />} />
          <Route path="/:videoId" element={<MainVideo videos={videos} />} />
          <Route path="Upload" element={<UploadVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

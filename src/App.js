import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import UploadSuccess from "./pages/UploadSuccess/UploadSuccess";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  // Variable for API key
  const api_key = "c030675b-01c7-48a7-a76f-df45fa997cfc";
  //`https://project-2-api.herokuapp.com/videos?api_key=${api_key}`
  // `https://project-2-api.herokuapp.com/videos?api_key=${api_key}`

  // Create state to hold video list
  const [videos, setVideos] = useState([]);
  // Create state to control page loading while waiting for API
  const [isLoading, setLoading] = useState(true);

  // On page load upload video list
  useEffect(() => {
    axios.get("http://localhost:8080/videos").then((response) => {
      setVideos(response.data);
      setLoading(false);
    });
  }, []);

  // If still waiting for API response show loader
  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MainVideo videos={videos} api_key={api_key} />}
          />
          <Route
            path="/:videoId"
            element={<MainVideo videos={videos} api_key={api_key} />}
          />
          <Route path="/Upload" element={<UploadVideo />} />
          <Route path="/Upload/Success" element={<UploadSuccess />} />
          <Route path="/Video-not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

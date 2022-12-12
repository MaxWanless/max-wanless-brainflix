import "./App.scss";
import { useState, useEffect } from "react";
import axios from "./api/axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import UploadSuccess from "./pages/UploadSuccess/UploadSuccess";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  // Create state to hold video list
  const [videos, setVideos] = useState([]);
  // Create state to control page loading while waiting for API
  const [isLoading, setLoading] = useState(true);
  // Create state to trigger on succesfull upload
  const [uploadComplete, setUploadComplete] = useState(true);
  // function to set state on successfull upload
  const trackUpload = () => {
    setUploadComplete(!uploadComplete);
  };

  // On page load upload video list
  useEffect(() => {
    axios.get("/videos").then((response) => {
      setVideos(response.data);
      setLoading(false);
    });
  }, [uploadComplete]);

  // If still waiting for API response show loader
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
          <Route path="/Upload" element={<UploadVideo />} />
          <Route
            path="/Upload/Success"
            element={<UploadSuccess trackUpload={trackUpload} />}
          />
          <Route path="/Video-not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

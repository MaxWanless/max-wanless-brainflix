import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// Pages
import MainVideo from "./pages/MainVideo/MainVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import UploadSuccess from "./pages/UploadSuccess/UploadSuccess";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

// Components
import Header from "./component/Header/Header";
import { VideoContext } from "./context/videoContext";
import { CurrentVideoProvider } from "./context/currentVideoContext";

function App() {
  const { loading } = useContext(VideoContext);
  // Create state to trigger on succesfull upload
  const [uploadComplete, setUploadComplete] = useState(true);
  // function to set state on successfull upload
  const trackUpload = () => {
    setUploadComplete(!uploadComplete);
  };

  // If still waiting for API response show loader
  if (loading) {
    return <div></div>;
  }

  return (
    <div className="App">
      <CurrentVideoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainVideo />} />
            <Route path="/:videoId" element={<MainVideo />} />
            <Route path="/Upload" element={<UploadVideo />} />
            <Route
              path="/Upload/Success"
              element={<UploadSuccess trackUpload={trackUpload} />}
            />
            <Route path="/Video-not-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CurrentVideoProvider>
    </div>
  );
}

export default App;

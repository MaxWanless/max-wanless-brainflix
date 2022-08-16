import "./App.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import VideoDescription from "./component/VideoDescription/VideoDescription";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoDescription />
      <Footer />
    </>
  );
}

export default App;

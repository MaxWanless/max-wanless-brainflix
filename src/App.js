import "./App.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import VideoDescription from "./component/VideoDescription/VideoDescription";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";
import CommentSection from "./component/CommentSection/CommentSection";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoDescription />
      <CommentSection />
      <Footer />
    </>
  );
}

export default App;

import "./App.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import VideoDescription from "./component/VideoDescription/VideoDescription";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";
import CommentSection from "./component/CommentSection/CommentSection";
import VideoList from "./component/VideoList/VideoList";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoDescription />
      <CommentSection />
      <VideoList />
      <Footer />
    </>
  );
}

export default App;

import { useContext, createContext, useState, useEffect } from "react";
import { VideoContext } from "../context/videoContext";
import axios from "../api/axios";

export const CurrentVideoContext = createContext();

export const CurrentVideoProvider = ({ children }) => {
  const { videos } = useContext(VideoContext);
  // Create state hold current video data
  const [currentVideo, setCurrentVideo] = useState(null);
  // Create state to redirect to 404 page if API call fails
  const [axiosFailed, setAxiosFailed] = useState(false);
  // Create state to hold current video Id
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/videos/${currentVideoId}`)
      ?.then((response) => {
        setCurrentVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setTimeout(() => {
          setAxiosFailed(true);
        }, 2000);
      });
  }, [currentVideoId]);

  return (
    <CurrentVideoContext.Provider
      value={{
        loading,
        currentVideo,
        axiosFailed,
        currentVideoId,
        setCurrentVideoId,
      }}
    >
      {children}
    </CurrentVideoContext.Provider>
  );
};

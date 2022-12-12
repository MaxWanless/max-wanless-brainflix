import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get("/videos")
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <VideoContext.Provider value={{ videos, loading }}>
      {children}
    </VideoContext.Provider>
  );
};

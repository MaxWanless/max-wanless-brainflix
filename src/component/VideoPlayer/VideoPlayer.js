import { useRef, useState } from "react";
import play from "../../assets/Icons/play.svg";
import pause from "../../assets/Icons/pause.svg";
import scrub from "../../assets/Icons/scrub.svg";
import volumeOff from "../../assets/Icons/volume_off.svg";
import volumeUp from "../../assets/Icons/volume_up.svg";
import fullScreen from "../../assets/Icons/fullscreen.svg";
import closeFullScreen from "../../assets/Icons/close_fullscreen.svg";

import "./VideoPlayer.scss";

const VideoPlayer = ({ currentVideo }) => {
  return (
    <div className="player__container">
      <video
        className="player"
        controls
        poster={currentVideo.image}
        src={currentVideo.video}
      ></video>
    </div>
  );
};
export default VideoPlayer;

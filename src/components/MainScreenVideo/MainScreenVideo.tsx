import * as React from "react";
import { Video, VideoControl, VideoWrapper } from "./styled";
import { getStaticContent } from "../../services/static-file";
import { Loader } from "../Loader";

const { useRef, useState } = React;

export const MainScreenVideo = () => {
  const [controlsVisible, setControlsVisibility] = useState(true);
  const [preLoading, setPreLoading] = useState(true);
  const videoElement = useRef<HTMLVideoElement>(null);

  const handleVideoControlButtonClick = () => {
    if (videoElement && videoElement.current) {
      if (!videoElement.current.paused) {
        console.log("click, pause", Object.keys(videoElement.current));
        videoElement.current.pause();
        setControlsVisibility(true);
      } else {
        console.log("click, play", Object.keys(videoElement.current));
        videoElement.current.play();
      }
    }
  };

  const handleVideoClick = () => {
    if (videoElement && videoElement.current) {
      if (!videoElement.current.paused) {
        videoElement.current.pause();
        setControlsVisibility(true);
      }
    }
  };

  React.useEffect(() => {
    if (videoElement && videoElement.current) {
      videoElement.current.onplay = () => {
        setControlsVisibility(false);
      };
    }
  }, []);
  return (
    <VideoWrapper>
      <Loader isLoading={preLoading} />
      <VideoControl
        onClick={handleVideoControlButtonClick}
        visible={controlsVisible}
        src={getStaticContent("misc/image.png")}
        alt="player-control"
      />
      <Video
        onCanPlay={() => setPreLoading(false)}
        onClick={handleVideoClick}
        autoPlay
        ref={videoElement}
      >
        <source src={getStaticContent("MAIN_VIDEO.mp4")} type="video/mp4" />
      </Video>
    </VideoWrapper>
  );
};

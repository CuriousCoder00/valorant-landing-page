import React from "react";
import audioSrc from "../assets/VALORANT Episode 5 - Main Theme Music PT.1 (Extended Version).mp3";
const AudioOption = () => {
  const [audioState, setAudioState] = React.useState(true);
  const audio = document.getElementById("audio") as HTMLAudioElement;
  const handleAudioPlay = () => {
    if (audioState) {
      audio?.pause();
      setAudioState(false);
    } else {
      audio?.play();
      setAudioState(true);
    }
  };
  const decreaseAudioVolume = () => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
    }
  };
  const increaseAudioVolume = () => {
    if (audio.volume < 1) {
      audio.volume += 0.1;
    }
  };
  const handleAudioVolume = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      increaseAudioVolume();
    } else if (e.key === "ArrowDown") {
      decreaseAudioVolume();
    }
  };
  React.useEffect(() => {
    if (audio !== null && audioState) {
      audio.volume = 0.1;
    }
  }, [audioState]);
  return (
    <div className="flex items-center justify-center absolute bottom-5 right-5 z-50">
      <label
        htmlFor="audio"
        onClick={handleAudioPlay}
        onKeyUp={handleAudioVolume}
        tabIndex={0}
        className="cursor-pointer border-2 rounded-full w-10 h-10 bg-black border-white flex items-center justify-center"
      >
        <div className="flex items-center justify-center gap-1">
          <div
            className={`h-1 w-[1px] ${
              audioState ? "h-3 animate-music1" : "h-1"
            } bg-white rounded-md`}
          ></div>
          <div
            className={`h-1 w-[1px] ${
              audioState ? "h-3 animate-music2" : "h-1"
            } bg-white rounded-md`}
          ></div>
          <div
            className={`h-1 w-[1px] ${
              audioState ? "h-3 animate-music3" : "h-1"
            } bg-white rounded-md`}
          ></div>
          <div
            className={`h-1 w-[1px] ${
              audioState ? "h-3 animate-music4" : "h-1"
            } bg-white rounded-md`}
          ></div>
        </div>
      </label>
      <audio
        id="audio"
        className="hidden"
        src={audioSrc}
        autoPlay
        loop
        controls
        onLoadedData={() => audio?.play()}
      />
    </div>
  );
};

export default AudioOption;

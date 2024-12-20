import React, { useEffect } from "react";
import AudioOption from "./components/audio-option";
import Header from "./components/header";
import Hero from "./components/hero";
import loaderAudio from "@/assets/Valorant Loading Screen - Sound Effect (Valorant Game SFX).mp3";
function App() {
  const [loaded, setLoaded] = React.useState(false);
  const loaderAudioElement = document.getElementById(
    "loader-audio"
  ) as HTMLAudioElement;
  useEffect(() => {
    loaderAudioElement ? loaderAudioElement.play() : null;
    loaderAudioElement ? (loaderAudioElement.volume = 1) : null;
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, [loaded]);

  if (!loaded) {
    return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
        <audio id="loader-audio" src={loaderAudio} autoPlay />
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-10 h-10 bg-red-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-10 h-10 bg-red-500 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center max-w-screen h-dvh text-center relative">
      <AudioOption />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
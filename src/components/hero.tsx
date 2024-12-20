import videoSrc from "@/assets/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4";
import audioSrc from "@/assets/Valorant - Choose Hover - Gaming Sound Effect Valorant (HD)   Sound Effects.mp3";
import { Button } from "./ui/button";

const Hero = () => {
  const hoverAudio = document.getElementById("menu-audio") as HTMLAudioElement;

  const handleMouseOverFx = () => {
    hoverAudio.volume = 1;
    hoverAudio.currentTime = 4.5;
    hoverAudio.play();
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 min-h-dvh w-screen overflow-hidden rounded-none bg-blue-75"
      >
        <div>
          <video
            src={videoSrc}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-8 px-5 sm:px-10 flex flex-col items-center justify-center size-full gap-8">
            <p className="mb-5 font-robert-regular text-blue-100">
              A 5v5 character-based tactical shooter
            </p>
            <h1 className="hero-heading text-blue-100">valorant</h1>
            <div className="flex items-center justify-center p-[2px] border">
              <audio id="menu-audio" src={audioSrc} autoPlay={false} />
              <Button
                className="rounded-none bg-red-500 text-lg hover:bg-white hover:text-slate-700 p-8 transition-colors duration-200 uppercase"
                onMouseEnter={handleMouseOverFx}
              >
                play for free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

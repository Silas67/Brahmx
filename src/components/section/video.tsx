import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Reel = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!videoRef.current) return;

    gsap.fromTo(
      videoRef.current,
      { scale: 0.3, transformOrigin: "top left" },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="w-[100vw] space-y-8 px-[30px] py-24 max-sm:px-[15px]">
      <div className="flex items-center justify-between font-bold text-neutral-500">
        <h1>Showreel</h1>
        <h1>2014-2025</h1>
      </div>
      <div ref={videoRef} className="w-full  border origin-top-left">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/medias/nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Reel;

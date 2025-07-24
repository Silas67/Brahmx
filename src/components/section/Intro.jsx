"use client";
import { useRef, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import WipeTransition from "../utils/WipeTransition";
import Reveal from "../utils/Reveal";

const Loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(".text1", { opacity: 1 });
    tl.set(".slider", { opacity: 1 });

    tl.fromTo(
      ".text1",
      {
        scale: 1,
        y: 100,
      },
      { scale: 1, y: 0, duration: 2, delay: 2, ease: "power4.inOut" },
      "-=0.5"
    ); //Scale up to top

    tl.to(".text1", {
      y: -100,
      ease: "power4.inOut",
      duration: "0.8",
      delay: "3",
    }); //Translates as exit
  });
  return (
    <div className="w-full bg-white relative h-[100vh] flex items-center justify-center flex-col">
      <div className="group flex items-center justify-center overflow-hidden gap-8 text-black uppercase text-4xl flex-col max-sm:text-2xl max-sm:scale-[0.5]">
        <div className="overflow-hidden max-h-[100px] text1 opacity-0 ">
          <Reveal className=" font-bold">Abram.</Reveal>
        </div>

        <div className="w-[200px] h-[250px] overflow-hidden relative slider">
          <WipeTransition />
        </div>
      </div>
    </div>
  );
};

export default Loader;

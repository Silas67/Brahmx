"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WipeTransition = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "/images/floating_8.jpg",
    "/images/floating_2.jpg",
    "/images/floating_3.jpg",
    "/images/floating_6.jpg",
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(".container", { scale: 0 });

    tl.fromTo(
      ".container",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power2.inOut", delay: 2 }
    );

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      tl.fromTo(
        ref,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power2.inOut",
          delay: 2,
          stagger: index * 0.5,
        },
        index * 1
      );
    });

    if (bgRef.current) {
      tl.fromTo(
        bgRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      );
    }

    tl.fromTo(
      ".img",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.inOut",
      },
      "-=1.5"
    );
  }, []);

  return (
    <div className="w-full h-full relative container">
      {images.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => {
            imageRefs.current[idx] = el;
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            zIndex: idx + 1,
            clipPath: "inset(100% 0% 0% 0%)",
            position: "absolute",
          }}
        >
          <Image
            src={src}
            alt={`Slide ${idx}`}
            fill
            className="object-cover img"
          />
        </div>
      ))}

      <div
        className="absolute top-0 left-0 bottom-0 w-full h-full bg-white"
        ref={bgRef}
        style={{
          zIndex: images.length + 1,
          clipPath: "inset(100% 0% 0% 0%)",
        }}
      ></div>
    </div>
  );
};

export default WipeTransition;

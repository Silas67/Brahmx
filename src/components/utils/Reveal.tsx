import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Reveal({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    const spans = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      spans,
      { y: "100%" },
      {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      }
    );
  }, []);

  const text = children;
  return (
    <div className="" ref={textRef}>
      {text.split("").map((char, i) => (
        <span key={i} className={`inline-block ${className}`}>
          {char === " " ? "/u00A0" : char}
        </span>
      ))}
    </div>
  );
}

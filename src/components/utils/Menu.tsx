"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbMenu3,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navlinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  const closeMenu = () => {
    if (tl.current) tl.current.reverse();
    setOpen(false);
  };

  // Active Class Utility
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && hash === "";
    }
    if (href.startsWith("#")) {
      return hash === href;
    }
    return pathname === href;
  };

  // Hash Instant Changing Function
  const handleNavClick = (href: string) => {
    setHash(href); // ✅ instantly set active
    closeMenu(); // ✅ close the menu
  };

  // Lock Scrolling When Open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [open]);

  // GSAP Animation For Opening and Closing Menu
  useGSAP(() => {
    if (!menuRef.current) return;

    gsap.set(menuRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
    });

    tl.current = gsap.timeline({
      paused: true,
      onStart: () => {
        menuRef.current!.style.display = "flex";
        menuRef.current!.style.pointerEvents = "auto";
      },
      onReverseComplete: () => {
        menuRef.current!.style.display = "none";
        menuRef.current!.style.pointerEvents = "none";
      },
    });

    tl.current.to(menuRef.current, {
      backgroundColor: "#fff",
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.inOut",
      duration: 1,
    });
  }, []);

  // Toggle Utility Class for Opening and Closing Menu
  const toggle = () => {
    if (!tl.current) return;
    if (open) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setOpen(!open); // flips icon
  };

  // Function to Close Menu
  useEffect(() => {
    if (open) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Fuction to Close Menu if Hash Changes
  useEffect(() => {
    const handleHashChange = () => {
      if (open) closeMenu();
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [open]);

  return (
    <>
      {/* toggle button */}
      <button
        aria-label="Toggle navigation"
        onClick={toggle}
        className=" flex items-center justify-center rounded-xl transition-discrete duration-300 cursor-pointer"
      >
        {open ? (
          <TbMenu3 className="z-50 outline-none" />
        ) : (
          <TbMenu3 className="z-50 outline-none" />
        )}
      </button>

      {/* menu */}
      <div
        ref={menuRef}
        style={{
          display: "none",
          pointerEvents: "none",
          willChange: "clip-path",
          overflow: "hidden",
        }}
        className="absolute inset-0 bg-white z-40 h-[100vh] md:px-[100px] px-8 flex items-center justify-between max-sm:flex-col pb-32 pt-10"
      >
        <div
          className="md:w-[70%] w-full h-full  flex flex-col items-start justify-center gap-10
                   text-4xl text-neutral-900"
          onClick={closeMenu}
        >
          {" "}
          {Navlinks.map((txt, idx) => {
            const active = isActive(txt.href);

            return (
              <motion.div
                key={idx}
                className={`uppercase hover:tracking-wider transition-all duration-300 hover:text-primary ${
                  active ? "text-neutral-900" : "text-neutral-700"
                }`}
              >
                <Link href={txt.href} onClick={() => handleNavClick(txt.href)}>
                  {txt.label.split("").map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        ease: "anticipate",
                        delay: charIdx * 0.05,
                      }}
                      style={{
                        display: "inline-block",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center flex-1 w-[30%]  h-full max-sm:hidden ">
          <div className="border-l border-white px-[50px] space-y-8">
            {" "}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h1 className="font-semibold text-xl text-white">Office</h1>
              <div className="text-sm flex-col items-center flex space-y-2">
                <span>
                  1st Floor, Kebbi Hotel, Central Business District, Abuja,
                  Nigeria
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h1 className="font-semibold text-xl text-white">Contact</h1>
              <p className="flex items-center  gap-2">
                <TbMenu3 />
                <span className="text-sm">+234 803 283 2962</span>
              </p>
              <p className="flex items-center gap-2">
                <TbMenu3 />
                <span className="text-sm"> Blinkzsparks@gmail.com</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h1 className="font-semibold text-xl text-white">Social</h1>
              <p className="flex items-center gap-2 text-primary">
                <Link href={"https://instagram.com"}>
                  <TbMenu3 />
                </Link>

                <Link href={"https://twitter.com"}>
                  <TbMenu3 />
                </Link>

                <Link href={"https://linkedin.com"}>
                  <TbMenu3 />
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5 sm:mt-0 mt-8">
          {/* small‑screen social icons */}
          <div className="flex gap-6 sm:hidden">
            <Link href="https://instagram.com">
              <TbBrandInstagram />
            </Link>
            <Link href="https://twitter.com">
              <TbBrandTwitter />
            </Link>
            <Link href="https://linkedin.com">
              <TbBrandLinkedin />
            </Link>
          </div>

          {/* Contact Us button */}
          <Link
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="w-full max-w-xs py-3 bg-primary rounded-3xl text-center
               text-black font-semibold hover:bg-secondary transition"
          >
            Contact&nbsp;Us
          </Link>
        </div>
      </div>
    </>
  );
}
2;

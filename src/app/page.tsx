"use client";
import Intro from "@/components/section/Intro";
import Hero from "@/components/section/Hero";
import Reel from "@/components/section/video";
import Header from "@/components/common/Header";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Manifesto from "@/components/section/Manifesto";
import useLenis from "@/hooks/useLenis";
import Expertise from "@/components/section/Expertise";
import Projects from "@/components/section/Projects";
import Awards from "@/components/section/Awards";
import About from "@/components/section/About";
import Testimonials from "@/components/section/Testimonials";
import CalltoAction from "@/components/section/CalltoAction";
import Footer from "@/components/common/Footer";

export default function Home() {
  useLenis();
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 8000); // Animation duration
    return () => clearTimeout(timer);
  }, [isIntroVisible]);

  return (
    <>
      {isIntroVisible ? (
        <Intro />
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`lg:w-full sm:w-[100vw] overflow-hidden grid relative opactiy-0 ${
            isIntroVisible
              ? "opacity-0 transition-all duration-500"
              : "opacity-100 transition-all duration-500"
          }`}
        >
          <Header />
          <Hero />
          <section>
            <Manifesto />
          </section>
          <section>
            <Reel />
          </section>
          <section>
            <Expertise />
          </section>
          <section>
            <Projects />
          </section>
          <section>
            <Awards />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Testimonials />
          </section>
          <section>
            <CalltoAction />
          </section>
          <Footer />
        </motion.main>
      )}
    </>
  );
}

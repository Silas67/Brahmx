import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ filter: "blur(8px)" }}
      whileInView={{ filter: "blur(0px)" }}
      viewport={{ once: false }}
      transition={{ duration: 1.5, ease: "anticipate" }}
      className="w-full h-[100vh] relative flexcent px-[30px]"
    >
      <div className=" absolute top-[100px] text-[16px] max-sm:w-[80vw] ">
        <h1 className="text-left uppercase font-bold max-sm:text-center">
          A tailor-made approach to branding,
          <br className="max-sm:hidden" /> for brands that dare to be
          <br className="max-sm:hidden" /> Different.
        </h1>
      </div>
      <div className="absolute lg:-bottom-8 bottom-8">
        <p className="text-[16px] w-fit lg:bottom-36 absolute max-sm:text-center max-sm:bottom-72 max-sm:left-8 max-sm:leading-tight">
          Brands supported around the world — <br className="max-sm:hidden" />
          France, Switzerland, the United States, Senegal, Madagascar, Ivory
          Coast
        </p>

        <div className="flex items-end justify-between gap-12 w-full max-sm:flex-col-reverse max-sm:items-start max-sm:gap-4">
          <div className="text-[8vw] lg:h-[23vh] uppercase leading-tight heading font-black">
            Abram.Design
          </div>
          <div className="lg:w-[200px] lg:h-[250px] lg:mb-[20px] md:mb-[16px] md:w-[100px] md:h-[150px] w-[200px] h-[200px]">
            <Image
              src={"/images/floating_5.jpg"}
              alt="Image of Abram"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

import React, { useState } from "react";
import { ImageCon } from "@/components/utils/ImageCon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export const expertise = [
  {
    name: "Strategie de marque",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Identite Visualle",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Site Internet",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Direction Artistique",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Event & Community",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
];

const Expertise = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <div className="w-[100vw] flex justify-center items-center text-center flex-col relative py-24 max-sm:px-[15px]">
      <div className="text-center md:flex items-center justify-center flex-col relative gap-12 max-sm:hidden ">
        <p className="text-neutral-500 ">Expertise</p>
        <div className="text-center flex flex-col items-center justify-center">
          {" "}
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-tight text-neutral-400 hover:text-black transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            <span>STRATÉGIE DE </span>
            <ImageCon
              src={"/images/floating_1.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
            <span>MARQUE</span>
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-tight text-neutral-400 hover:text-black transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            <ImageCon
              src={"/images/floating_2.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
            <span>IDENTITÉ VISUELLE</span>
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-tight text-neutral-400 hover:text-black transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            <ImageCon
              src={"/images/floating_3.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
            SITE INTERNET
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-tight text-neutral-400 hover:text-black transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            DIRECTION ARTISTIQUE
            <ImageCon
              src={"/images/floating_4.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-tight text-neutral-400 hover:text-black transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            EVENT & COMMUNITY
            <ImageCon
              src={"/images/floating_5.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
        <h1 className="uppercase font-bold underline underline-offset-8 hover:text-neutral-400 transition-all duration-500">
          Voir Les Services
        </h1>
      </div>

      <div className="text-center max-sm:flex items-center justify-center flex-col relative gap-4 md:hidden">
        <p className="text-neutral-500 ">Expertise</p>
        <div>
          {expertise.map((el, idx) => (
            <div key={idx} className="border-b ">
              <button
                onClick={() => toggleSection(idx)}
                className="flex w-[100vw] justify-between px-[10px] text-[30px] font-bold items-center mb-[4px] mt-8"
              >
                <span className="">{el.name}</span>
                <Icon icon="line-md:plus" width="24" height="24" />
              </button>
              <motion.div
                layout
                initial={{ height: 0 }}
                animate={{
                  height: openSection === idx ? "320px" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden origin-top px-4 pt-4 space-y-4"
              >
                <p className="text-left">{el.details}</p>
                <ImageCon src="/images/floating_1.jpg" />
              </motion.div>
            </div>
          ))}
        </div>
        <h1 className="uppercase font-bold underline underline-offset-8 hover:text-neutral-400 transition-all duration-500 mt-12">
          Decouvrir Les Services
        </h1>
      </div>
    </div>
  );
};

export default Expertise;

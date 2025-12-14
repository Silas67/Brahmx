import React from "react";
import ScrollReveal from "../utils/ScrollReveal";

const Manifesto = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center text-center flex-col py-24 max-sm:px-[15px]">
      <div className="text-center max-w-xl flexcent flex-col gap-8">
        <p className="text-neutral-500">Manifesto</p>
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl font-bold max-sm:text-sm text-black"
        >
          I help brands to exist differently. Through 360° support, strategy,
          design, digital, I creates modern, different brand universes and above
          all memorable. Because standing out is not a concept, it&apos;s my
          norm.
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Manifesto;

import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full space-y-8 px-[30px] py-24">
      <div className="flex items-center justify-between font-bold text-neutral-700">
        <h1>Recent Projects</h1>
        <h1>2014-2025</h1>
      </div>

      <div className="grid grid-cols-2 place-content-center w-full gap-4 flex-wrap max-sm:grid-cols-1">
        {[1, 2, 3, 4].map((el) => (
          <div key={el} className="flex flex-col gap-4">
            <div className="w-full h-[350px] max-sm:h-[250px] text-left relative space-y-2 group overflow-hidden">
              <Image
                src={"/images/floating_2.jpg"}
                alt="Image"
                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                width={100}
                height={100}
              />
            </div>
            <div className="text-xl font-bold">Title</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

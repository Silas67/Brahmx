import React from "react";
import Image from "next/image";

const Projects = () => {
  const images = [
    {
      img: "/images/Img1.jpg",
      title: "Urbanites",
    },
    {
      img: "/images/Img2.jpg",
      title: "The Space Between Us",
    },
    {
      img: "/images/Img3.jpg",
      title: "Our Reflections",
    },
    {
      img: "/images/Img4.jpg",
      title: "Noy Gown",
    },
  ];
  return (
    <div className="w-full space-y-8 px-[30px] py-24">
      <div className="flex items-center justify-between font-bold text-neutral-700">
        <h1>Recent Projects</h1>
        <h1>2014-2025</h1>
      </div>

      <div className="grid grid-cols-2 place-content-center w-full gap-4 flex-wrap max-sm:grid-cols-1">
        {images.map((el, idx) => (
          <div key={idx} className="flex flex-col gap-4 group">
            <div className="w-full h-[350px] max-sm:h-[250px] text-left relative space-y-2  overflow-hidden">
              <Image
                src={el.img}
                alt="Image"
                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                fill
              />
            </div>
            <div className="text-lg font-bold text-neutral-700 filter lg:blur-[2px] group-hover:blur-[0px] transition-all duration-300">
              {el.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

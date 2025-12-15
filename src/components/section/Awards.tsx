import React from "react";
import Image from "next/image";

const Awards = () => {
  return (
    <div className="w-[100vw] my-24 relative h-[99vh] overflow-hidden max-sm:hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={"/images/Img2.jpg"}
          alt="/"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="z-30 text-white py-24 px-[30px] grid grid-rows-3">
        <div className="mb-[100px]">
          <h1 className="text-8xl font-black">Awards</h1>
        </div>
        <div className=" grid grid-cols-2 max-w-3xl gap-x-8">
          <div className=" flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Bouygues Telecom</h1>
            <p>
              Coup de coeur du Jury&quot; Sprint UX rassemblant 100
              participants, autour de l’amélioration du parcours UX pour les
              offres de smartphones Bouygues Telecom France.
            </p>
          </div>
          <div className="grid gap-4 [grid-rows:span-2]">
            <h1 className="text-5xl font-bold">330ML</h1>
            <p>
              Prix Coup de Cœur du Public – 2ᵉ place pour le brief Modern Brief
              330ML, portant sur la création d’une collection de bières en
              canette.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <h1 className="max-w-xs">
            {" "}
            Chaque prix reçu témoigne d’une approche engagée, stratégique et
            créative — celle qui fait la différence. S’ils sont symboliques,
          </h1>
        </div>
      </div>

      <div className="absolute bg-black/30 inset-0 w-full h-full -z-10"></div>
    </div>
  );
};

export default Awards;

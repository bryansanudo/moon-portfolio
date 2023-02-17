import React from "react";
import PageSection from "@/components/PageSection";

import portfolio1 from "@/assets/portfolio/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio/portfolio2.jpg";
import portfolio3 from "@/assets/portfolio/portfolio3.jpg";
import portfolio4 from "@/assets/portfolio/portfolio4.jpg";
import portfolio5 from "@/assets/portfolio/portfolio5.jpg";
import portfolio6 from "@/assets/portfolio/portfolio6.jpg";
import portfolio7 from "@/assets/portfolio/portfolio7.jpg";
import portfolio8 from "@/assets/portfolio/portfolio8.jpg";
import portfolio9 from "@/assets/portfolio/portfolio9.jpg";
import portfolio10 from "@/assets/portfolio/portfolio10.jpg";

import video1 from "@/assets/portfolio/video1.mp4";
import video2 from "@/assets/portfolio/video2.mp4";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
      category: "Título",
      code: "https://www.instagram.com/p/CfXVUefuIEe/",
      brand: "@elisabethmoondj",
    },
    {
      id: 2,
      src: portfolio2,
      category: "Título",
      code: "https://www.instagram.com/p/CIItr0nDqvy/",
      brand: "@elisabethmoondj",
    },
    {
      id: 3,
      src: portfolio3,
      category: "Título",
      code: "https://www.instagram.com/p/CUaWNIBLSf-/",
      brand: "@elisabethmoondj",
    },
    {
      id: 4,
      src: portfolio4,
      category: "Título",
      code: "https://www.instagram.com/p/CSDe7tOD9fw/",
      brand: "@elisabethmoondj",
    },
    {
      id: 5,
      src: portfolio5,
      category: "Título",
      code: "https://www.instagram.com/p/Cj8jCX4umss/",
      brand: "@elisabethmoondj",
    },
    {
      id: 6,
      src: portfolio6,
      category: "Título",
      code: "https://www.instagram.com/p/CcYU_k9uaVz/",
      brand: "@elisabethmoondj",
    },
    {
      id: 7,
      src: portfolio7,
      category: "Título",
      code: "https://www.instagram.com/p/CZ-8b4VOr20/",
      brand: "@elisabethmoondj",
    },
    {
      id: 8,
      src: portfolio8,
      category: "Título",
      code: "https://www.instagram.com/p/CjBGZY-LHR8/",
      brand: "@elisabethmoondj",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="portafolio"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            <div className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/CmP5IdHAHL-/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center justify-center">
                  <video
                    src={video2}
                    loop
                    autoPlay
                    muted
                    type="video/mp4"
                    playsInline
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <p className="m-4 text-sm md:text-lg">@elisabethmoondj</p>
                </div>
              </a>
            </div>
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
            <div className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/CZLTA64A2BP/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center justify-center">
                  <video
                    src={video1}
                    loop
                    autoPlay
                    muted
                    type="video/mp4"
                    playsInline
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <p className="m-4 text-sm md:text-lg">@elisabethmoondj</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Portfolio;

import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import logo1 from "@/assets/logo1.jpg";
import logo2 from "@/assets/logo2.jpg";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "servicios",
    },
    {
      id: 3,
      link: "portafolio",
    },
    {
      id: 5,
      link: "colaboraciones",
    },
    {
      id: 4,
      link: "contacto",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-40 bg-black text-white z-20 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <a
            href="https://www.instagram.com/elisabethmoondj/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img
                src={logo1}
                alt=""
                className="rounded-full object-cover md:w-40 md:h-40 h-28 w-28  duration-300 shadow-xl cursor-pointer shadow-thSecondary hover:shadow-thPrimary"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-thSecondary cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <a href="https://moon-marcas.vercel.app/">
            <div>
              <img
                src={logo2}
                alt=""
                className="rounded-full object-cover md:w-40 md:h-40 w-28 h-28  shadow-thPrimary hover:shadow-thSecondary duration-300 shadow-xl cursor-pointer"
              />
            </div>
          </a>
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

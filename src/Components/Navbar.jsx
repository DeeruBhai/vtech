import React, { useState } from "react";
import hamburgericon from "../assets/menu-burger-horizontal-svgrepo-com.svg";
import closeicon from "../assets/close-circle-svgrepo-com.svg";
const Navbar = () => {
  const [hamClick, setHamClick] = useState(false);
  const pagelinks = [
    { label: "Home", link: "#Home" },
    { label: "Services", link: "#Services" },
    { label: "About", link: "#About" },
    { label: "Client", link: "#Client" },
    { label: "Contact", link: "#Contact" },
  ];

  return (
    <header
      className="px-8 py-4 fixed z-30 w-full  max-container backdrop-blur-md bg-white
"
    >
      <nav className="flex justify-between items-center max-container ">
        <a href="#Home">
          <div className="flex flex-col justify-center items-center gap-2"></div>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {pagelinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="font-rubik leading-normal text-lg text-[#040404] hover:text-[#ff1b6b]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* */}
        <button
          className="hidden max-md:block "
          onClick={() => setHamClick(true)}
        >
          <img src={hamburgericon} alt="ham" className="w-[0.75rem]" />
        </button>
        {hamClick && (
          <div
            className="fixed h-[100vh] w-screen md:hidden  bg-black/50 backdrop-blur-md top-0 left-0 z-50  transition-all delay-100"
            onClick={() => setHamClick(false)}
          >
            <div className="text-[#040404]  bg-[#F3F8FF] flex-col absolute right-0 top-0 h-full px-8 pt-2  z-50 flex">
              <div className="self-start">
                <img
                  src={closeicon}
                  alt="close"
                  className="w-[1rem] mb-8 cursor-pointer mt-0"
                  onClick={() => setHamClick(false)}
                />
              </div>
              <ul className="flex-1 flex-col flex justify-center items-center gap-16 p-12">
                {pagelinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      className="font-rubik leading-normal text-lg text-[#040404]  hover:text-yellow-400"
                      onClick={() => setHamClick(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

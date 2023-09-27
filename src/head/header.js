import React, { useState } from "react";
import logo from "./logo.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`w-full bg-black top-0 left-0 right-0 z-10`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <h2 className="text-2xl text-cyan-600 font-bold">
              <img src={logo} alt="Logo" className="w-12 h-12" />
            </h2>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleMobileMenu}
              >
                {isMobile ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isMobile ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">

              <li className="pb-7 text-x2 text-white py-2 px-10 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                <a href="#resume" onClick={toggleMobileMenu} className="text-white">
                  Resume
                </a>
              </li>
              <li className="pb-7 text-x2 text-white py-2 px-10 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                <a href="#portfolio" onClick={toggleMobileMenu} className="text-white">
                  Portfolio
                </a>
              </li>
              <li className="pb-7 text-x2 text-white py-2 px-10 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                <a href="#blog" onClick={toggleMobileMenu} className="text-white">
                  Blog
                </a>
              </li>
              <li className="pb-7 text-x2 text-white py-2 px-10 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                
              </li>
              <li className="pb-7 text-x2 text-white py-2 px-10 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                <a href="#contact" className="text-white">HIRE ME</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

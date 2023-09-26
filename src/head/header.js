import React, { useState } from "react";
import logo from "./logo.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`w-full bg-black  top-0 left-0 right-0 z-10`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <h2 className="text-2xl text-cyan-600 font-bold">
              <img src={logo} alt="Logo" className="w-12 h-12" />
            </h2>

          
  );
};

export default Header;

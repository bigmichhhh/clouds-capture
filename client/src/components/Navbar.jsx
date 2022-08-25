import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { useEffect, useState } from "react";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 hover:text-sky-400 cursor-pointer ${classprops}`}>
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
      console.log(
        "🚀 ~ file: Navbar.jsx ~ line 28 ~ updatePosition ~ window.pageYOffset",
        window.pageYOffset
      );
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <nav
      className={`w-full border-b border-slate-600 flex md:justify-center justify-between items-center p-4 fixed z-50 ${
        scrollPosition > 15 ? "backdrop-blur" : "bg-slate-800"
      }`}
    >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-40 cursor-pointer" />
      </div>
      <ul className="text-white font-semibold text-sm md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["v2", "Exchange", "Market", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#4ba3e3] font-semibold py-2 px-7 mx-4 rounded-md cursor-pointer hover:bg-slate-400">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["v2", "Exchange", "Market", "Wallets"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

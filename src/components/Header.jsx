import { Link, useLocation } from "react-router-dom";
import React from "react";
export const Header = ({ dark, setDark }) => {
  const location = useLocation();
  const toggleTheme = () => {
    setDark(!dark);
    console.log("light", !dark);
  };

  const active = "border-b-2 border-green-500 text-white";

  return (<div className="flex flex-col">
    {!dark ?
      (<header className="w-full flex justify-between px-8 py-4 items-center bg-white text-[#1a1a1a]">
        <div className="text-lg font-bold"></div>
        <nav className="flex gap-8 text-sm">
          <Link to="/" className={`hover:text-[#1a1a1a] ${location.pathname === "/" ? active : "text-[#1a1a1a]"}`}>
            🏠 Home
          </Link>
          <Link to="/wallet" className={`hover:text-[#1a1a1a] ${location.pathname === "/wallet" ? active : "text-[#1a1a1a]"}`}>
            💼 Wallet
          </Link>
        </nav>
        <div className="text-xl text-gray-400 cursor-pointer" onClick={toggleTheme}>⚙️</div>
      </header>)
      : (<header className="w-full flex justify-between px-8 py-4 items-center bg-[#1a1a1a] text-white">
        <div className="text-lg font-bold"></div>
        <nav className="flex gap-8 text-sm">
          <Link to="/" className={`hover:text-white ${location.pathname === "/" ? active : "text-gray-400"}`}>
            🏠 Home
          </Link>
          <Link to="/wallet" className={`hover:text-white ${location.pathname === "/wallet" ? active : "text-gray-400"}`}>
            💼 Wallet
          </Link>
        </nav>
        <div className="text-xl text-gray-400 cursor-pointer" onClick={toggleTheme}>⚙️</div>
      </header>)
    }
    <div className="w-full h-[2px] bg-[#9ca3af]"></div>
  </div>
  );
};

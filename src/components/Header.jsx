import { Link, useLocation } from "react-router-dom";
import React from "react";
export const Header = ({ dark, setDark }) => {
  const location = useLocation();
  const toggleTheme=()=>{
    setDark(!dark);
    console.log("light", !dark);
  };
 
  const active = "border-b-2 border-green-500 text-white";

  return (
    <header className="w-full flex justify-between px-8 py-4 items-center bg-[#1a1a1a] text-white">
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
    </header>
  );
};

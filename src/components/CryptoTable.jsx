import React from "react";
import btc from "../assets/icons/BTC.png";
import eth from "../assets/icons/ETH.png";
import usdc from "../assets/icons/USDC.png";
import bnb from "../assets/icons/BNB.png";
import xrp from "../assets/icons/XRP.png";
import ada from "../assets/icons/CREAM.png";
import sol from "../assets/icons/SOL.png";
import doge from "../assets/icons/DOGE.png";
import ftm from "../assets/icons/FTM.png";
import link from "../assets/icons/LINK.png";


const coins = [
  { name: "Bitcoin", src: btc, symbol: "BTC", price: "$20,752.15" },
  { name: "Ethereum", src: eth, symbol: "ETH", price: "$20,752.15" },
  { name: "ESD Coin", src: usdc, symbol: "USDC", price: "$20,752.15" },
  { name: "BNB", src: bnb, symbol: "BNB", price: "$20,752.15" },
  { name: "XRP", src: xrp, symbol: "XRP", price: "$20,752.15" },
  { name: "Cardano", src: ada, symbol: "ADA", price: "$20,752.15" },
  { name: "Solana", src: sol, symbol: "SOL", price: "$20,752.15" },
  { name: "Dogecoin", src: doge, symbol: "DOGE", price: "$20,752.15" },
  { name: "Fanton", src: ftm, symbol: "FANTOM", price: "$20,752.15" },
  { name: "Cahinlink", src: link, symbol: "Link", price: "$20,752.15" },
];

export const CryptoTable = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-[#1e1e1e] text-white rounded-lg shadow-lg">
      <table className="w-full table-auto">
        <thead className="border-b border-gray-600">
          <tr className="text-left text-sm text-gray-400">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Coin</th>
            <th className="px-4 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.symbol} className="border-b border-gray-700 hover:bg-[#2a2a2a] transition ">
              <td className="px-4 py-3 text-sm">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-2 text-sm justify-between">

                  <div className="flex items-center gap-2">
                  <img src={coin.src} alt={coin.name} className="w-6 h-6 object-cover rounded" />
                  <div className="font-medium">{coin.name}</div></div>
                  
                  <div className="text-gray-400 pr-[150px]">{coin.symbol}</div>
               
              </td>
              <td className="px-4 py-3 text-sm">{coin.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

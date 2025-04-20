import React, { useState } from "react";
import metamask from "../assets/metamask.png";


export const WalletConnect = () => {
  const [connected, setConnected] = useState(false);
  const wallet = {
    network: "Energi Network",
    address: "0xBf9...18F8Fb9",
    balance: 1000,
    price: 2500,
  };

  const connectWallet = () => {
    setConnected(true);
  };

  return (
    <div className="text-white mt-[100px]">
      {!connected ? (
        <div className="flex flex-col items-center justify-center mt-20 text-white">
          <img src={metamask} alt="MetaMask" className="w-32 h-32 mb-4" />
          <h1 className="text-2xl font-semibold mb-4 tracking-widest">METAMASK</h1>
          <button
            onClick={connectWallet}
            className="bg-green-500 px-6 py-2 rounded-md text-white font-medium hover:bg-green-600 transition"
          >
            Connect wallet
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 text-white p-8 rounded-lg max-w-lg mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="" alt="Metamask" className="w-8 h-8" />
              <h2 className="text-xl font-semibold">{wallet.network}</h2>
            </div>
            <span className="text-green-400">Connected</span>
          </div>
          <div classsName="w-full h-[2px] bg-white"></div>
          <div className="mt-6">
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <span>{wallet.address}</span>
                <img src="" alt="Copy Address" className="cursor-pointer w-5 h-5" />
              </div>
              <img src="" alt="Open Explorer" className="cursor-pointer w-5 h-5" />
            </div>
            <div className="flex flex-col items-center py-[150px]">
              <p className="text-sm">Total Balance</p>
              <div className="flex items-center space-x-2 flex-col">
                <p className="font-bold">{wallet.balance} 💸</p>
                <p className="text-sm text-gray-400">${wallet.price}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
import React from "react";
import metamask from "../assets/metamask.png"; 

export const WalletConnect = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        alert("Wallet connected!");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("MetaMask not found!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 text-white">
      <img src={metamask} alt="MetaMask" className="w-32 h-32 mb-4" />
      <h1 className="text-2xl font-semibold mb-4 tracking-widest">METAMASK</h1>
      <button onClick={connectWallet} className="bg-green-500 px-6 py-2 rounded-md text-white font-medium hover:bg-green-600 transition">
        Connect wallet
      </button>
    </div>
  );
};

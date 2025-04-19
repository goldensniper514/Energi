import React from "react";

const coins = [
  { name: "Bitcoin", symbol: "BTC", icon: "🟠", price: "$20,752.15" },
  { name: "Ethereum", symbol: "ETH", icon: "🟣", price: "$20,752.15" },
  { name: "USD Coin", symbol: "USDC", icon: "🔵", price: "$20,752.15" },
  { name: "BNB", symbol: "BNB", icon: "🟡", price: "$20,752.15" },
  { name: "XRP", symbol: "XRP", icon: "⚪", price: "$20,752.15" },
  { name: "Cardano", symbol: "ADA", icon: "🔷", price: "$20,752.15" },
  { name: "Solana", symbol: "SOL", icon: "🟤", price: "$20,752.15" },
  { name: "Dogecoin", symbol: "DOGE", icon: "🟡", price: "$20,752.15" },
  { name: "Fantom", symbol: "FTM", icon: "🔹", price: "$20,752.15" },
  { name: "Chainlink", symbol: "LINK", icon: "🔗", price: "$20,752.15" },
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
            <tr key={coin.symbol} className="border-b border-gray-700 hover:bg-[#2a2a2a] transition">
              <td className="px-4 py-3 text-sm">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-2 text-sm">
                <span className="text-lg">{coin.icon}</span>
                <span className="font-medium">{coin.name}</span>
                <span className="text-gray-400 ml-2">{coin.symbol}</span>
              </td>
              <td className="px-4 py-3 text-sm">{coin.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

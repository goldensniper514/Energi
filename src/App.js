import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CryptoTable } from "./components/CryptoTable";
import { WalletConnect } from "./components/WalletConnect";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Header />
        <Routes>
          <Route path="/" element={<CryptoTable />} />
          <Route path="/wallet" element={<WalletConnect />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

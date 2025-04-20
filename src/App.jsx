import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CryptoTable } from "./components/CryptoTable";
import { WalletConnect } from "./components/WalletConnect";

const App = () => {
  const [dark, setDark]=useState(true);

  return (
    <Router>
      <div className={`min-h-screen ${dark ? 'bg-[#121212]' : 'bg-white'}`}>
        <Header dark={dark} setDark={setDark}/>
        <Routes>
          <Route path="/" element={<CryptoTable />} />
          <Route path="/wallet" element={<WalletConnect />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

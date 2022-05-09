import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import WalletCard from "./components/WalletCard";

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<HomePage />} />
       <Route path="/walletconnect" element={<WalletCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

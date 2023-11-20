import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.scss";
import Home from "./Page/Home";
import Staking from "./Page/Staking";
import { useEffect } from "react";
// import Dashboard from "./Page/Dashboard";
import Pulsechain from "./Page/Pulsechain";
import BinanceChain from "./Page/BinanceChain";
import Ethereum from "./Page/Ethereum";
import Wrappers from "./Page/Wrapper";
import Polygon from "./Page/Polygon"; 
import WalletModal from "./Components/WalletModal";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
      setTimeout(() => {
        document.documentElement.scrollTo(0, 0);
      }, 0);
    }, [location.pathname, location.search]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <WalletModal />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/pulsechain" element={<Pulsechain />} />
          <Route path="/binance-chain" element={<BinanceChain />} />
          <Route path="/ethereum" element={<Ethereum />} />
          <Route path="/polygon" element={<Polygon />} />
          <Route path="/wrapper" element={<Wrappers />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

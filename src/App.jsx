import React from "react";
import Home from "./Home";
import {Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Productpage from "./Pages/Productpage";
import SecProductpage from "./Pages/SecProductpage";
import ThiProductpage from "./Pages/ThiProductpage";
import FourProductpage from "./Pages/FourProductpage";
import FithProductpage from "./Pages/FithProductpage";
import OverPayPage from "./Pages/OverPayPage";



function App() {
  return (
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/overpay" element={<OverPayPage />} />
      <Route path="/portfolio/productpage" element={<Productpage />} />
      <Route path="/portfolio/productpagetrippant" element={<SecProductpage />} />
      <Route path="/portfolio/productpagestottandmay" element={<ThiProductpage />} />
      <Route path="/portfolio/productpagefemmetype" element={<FourProductpage />} />
      <Route path="/portfolio/productpagekommune" element={<FithProductpage />} />
    </Routes>

  );
}

export default App;

import React from "react";
import Home from "./Home";
import {Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Productpage from "./Pages/Productpage";



function App() {
  return (
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/productpage" element={<Productpage />} />
    </Routes>

  );
}

export default App;

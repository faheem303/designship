import React from "react";
import Home from "./Home";
import {Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";



function App() {
  return (
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>

  );
}

export default App;

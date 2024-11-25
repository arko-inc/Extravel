import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Food from "./pages/Food";
import TravelTips from "./pages/Traveltips";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Foods" element={<Food />} />
        <Route path="/travel-tips" element={<TravelTips />} />
      </Routes>
    </Router>
  );
}

export default App;

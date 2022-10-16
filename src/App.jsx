import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.less";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

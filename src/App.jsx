import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.less";

// components
import Header from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/home" element={Home} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

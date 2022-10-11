import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// components
import Header from "./components/Header";
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

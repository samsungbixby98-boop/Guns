import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./App.css";

function App() {
  const basename = import.meta.env.DEV ? "/" : "/Inventory";

  return (
    <BrowserRouter basename={basename}>
      <Navbar />

      <Routes>
        {/* IMPORTANT FIX */}
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;

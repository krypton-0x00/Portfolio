import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className=" h-[100vh] w-full">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

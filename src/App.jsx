import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className=" h-[100vh] w-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

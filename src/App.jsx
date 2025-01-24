import React, { useState } from "react";
import "./App.css"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import TempHome from "./Components/TempHome";
import WishCard from "./Components/WishCard";

import { Birthday } from "./pages/Birthday";
const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/wishes" element={<WishCard />} />

      </Routes>

      {/* <WishCard></WishCard> */}
    </>
  );
};

export default App;

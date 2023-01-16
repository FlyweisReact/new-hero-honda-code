/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./Component/Homescreen";
import HomeScreen2 from "./Component/HomeScreen2";
import Redeem from "./Component/Redeem";
import Search from "./Component/Search";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/home" element={<HomeScreen2 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route pa
      </Routes>
    </BrowserRouter>
  );
};

export default App;

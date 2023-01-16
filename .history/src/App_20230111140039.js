/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./Component/Homescreen";
import HomeScreen2 from "./Component/HomeScreen2";
import Redeem from "./Component/Redeem";
import RedeemCoupon from "./Component/RedeemCoupon";
import Search from "./Component/Search";
import SearchSummary from "./Component/SearchSummary";
import Summary from "./Component/Summary";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/home" element={<HomeScreen2 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/searchScreen" element={<SearchSummary />} />
        <Route path="/redeeem" element={<RedeemCoupon />} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;

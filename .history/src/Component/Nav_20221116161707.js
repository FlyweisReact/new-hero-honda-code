/** @format */

import React from "react";
import logo from "../Images/rrh-logo 3.png";
const Nav = () => {

  const show = () => {
    const target =document.getElementById('hide')
target.style.magi
  }

  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars" onClick={() => show()}></i>
        </div>
      </div>

        <div className="hide">
          <h5>dsdasdjn</h5>
        </div>

       </>
  );
};

export default Nav;

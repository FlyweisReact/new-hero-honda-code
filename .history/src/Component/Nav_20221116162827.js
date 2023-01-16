/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import logo from "../Images/rrh-logo 3.png";
const Nav = () => {
  const show = () => {
    // document.getElementById("hide").style.top = "0";
  };

  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars" onClick={show}></i>
        </div>
      </div>

      <div className="modal" id="hide">
        <div className="modalBtn">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </>
  );
};

export default Nav;

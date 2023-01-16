/** @format */

import React from "react";
import { Button  ,Modal} from "react-bootstrap";
import logo from "../Images/rrh-logo 3.png";
const Nav = () => {


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

    
    </>
  );
};

export default Nav;

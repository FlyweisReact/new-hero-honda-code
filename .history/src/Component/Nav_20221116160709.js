/** @format */

import React from "react";
import logo from "../Images/rrh-logo 3.png";
const Nav = () => {
  return (
    <>
      {/* <Container> */}
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Nav;

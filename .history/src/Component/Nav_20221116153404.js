/** @format */

import React from "react";
import { Container } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Container>
        <div className="Navbar">
          <div className="left">
            <h2>HONDA</h2>
            <h6>RING ROAD HONDA</h6>
          </div>
          <div className="right">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Nav;

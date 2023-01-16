/** @format */

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import logo from "../Images/rrh-logo 3.png";

//Login Modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <button className="login">Login</button>
        <br />
        <button className="btn">Register</button>
      </Modal.Body>
    </Modal>
  );
}

const Nav = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i
            className="fa-solid fa-bars"
            onClick={() => setModalShow(true)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Nav;

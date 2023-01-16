/** @format */

import React, { useState } from "react";
import { Button, Modal, Offcanvas } from "react-bootstrap";
import logo from "../Images/rrh-logo 3.png";

//Login Modal

const Nav = () => {
  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [eye, setEye] = useState(false);

  //Modal
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <button
            className="login"
            onClick={() => {
              setModalShow(false);
              handleShow();
            }}
          >
            Login
          </button>
          <br />
          <button className="login">Register</button>
        </Modal.Body>
      </Modal>
    );
  }

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

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 style={{ color: "#399C71" }}>Login</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="LoginForm">
            <input type={"email"} placeholder="Email" />
            <br />
            <br />
            <input type={eye ? 'text' : 'password'} placeholder="Password" />
            {eye ? (
              <i class="fa-solid fa-eye-slash" onClick={() => setEye(!eye)}></i>
            ) : (
              <i class="fa-solid fa-eye" onClick={() => setEye(!eye)}></i>
            )}
          </form>
          <span style={{color : '#44C38C'}}>FORGOT PASSWORD</span>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;

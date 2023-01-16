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

  const [secondShow, setSecondShow] = useState(false);
  const close = () => setSecondShow(false);
  const open = () => setSecondShow(true);

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
          <button
            className="login "
            onClick={() => {
              setModalShow(false);
              open();
            }}
          >
            Register
          </button>
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

      {/* Login offCanvas */}
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
            <input type={eye ? "text" : "password"} placeholder="Password" />
            {eye ? (
              <i class="fa-solid fa-eye-slash" onClick={() => setEye(!eye)}></i>
            ) : (
              <i class="fa-solid fa-eye" onClick={() => setEye(!eye)}></i>
            )}
          </form>
          <span
            style={{
              color: "#44C38C",
              cursor: "pointer",
              fontSize: "1rem",
              marginLeft: "10%",
            }}
          >
            FORGOT PASSWORD
          </span>

          <div style={{ marginTop: "15%" }}>
            <button className="loginBtn">LOGIN</button>
            <br />
            <button className="ReisterBtn">REGISTER</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Register OffCanvas */}
      <Offcanvas show={secondShow} onHide={close} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 style={{ color: "#399C71" }}>Open new account</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="LoginForm">
            <input type={"text"} placeholder="Full Name" />
            <br />
            <br />
            <input type={"text"} placeholder="Agent Id" />
            <br />
            <br />
            <input type={"email"} placeholder="Email" />
            <br />
            <br />
            <input type={eye ? "text" : "password"} placeholder="Password" />
            {eye ? (
              <i class="fa-solid fa-eye-slash" onClick={() => setEye(!eye)}></i>
            ) : (
              <i class="fa-solid fa-eye" onClick={() => setEye(!eye)}></i>
            )}
          </form>

          <span style={{ marginLeft: "10%" }}>
            <span style={{marginRight : ''}}>
              <input type={"checkbox"} />
            </span>
            I agree to all{" "}
            <span style={{ color: "#44c38c" }}>terms & policy</span>
          </span>

          <div style={{ marginTop: "15%" }}>
            <button className="loginBtn">OPEN ACCOUNT</button>
            <br />
            <button className="ReisterBtn">LOGIN</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;

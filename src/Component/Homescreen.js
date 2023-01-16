/** @format */

import React, { useState } from "react";
import Nav from "../Assets/Nav";
import Image2 from "./Group 537.png";
import { Modal, Offcanvas } from "react-bootstrap";
import logo from "../Images/rrh-logo 3.png";
import { useNavigate } from "react-router-dom";

const Homescreen = () => {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [secondShow, setSecondShow] = useState(false);
  const close = () => setSecondShow(false);
  const open = () => setSecondShow(true);

  const [eye, setEye] = useState(false);



  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
        <button
            className="login"
            onClick={() => {
              setModalShow(false);
              handleShow();
            }}
          >
            Login
          </button>
          <button
            className="login "
            onClick={() => {
              setModalShow(false);
              open();
            }}
          >
            Register
          </button>
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
            <button className="loginBtn" onClick={() => navigate("/home")}>
              LOGIN
            </button>
            <br />
            <button
              className="ReisterBtn"
              onClick={() => {
                open();
                handleClose();
                navigate("/home");
              }}
            >
              REGISTER
            </button>
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
          <br />
          <span style={{ marginLeft: "10%" }}>
            <span style={{ marginRight: "5px" }}>
              <input type={"checkbox"} />
            </span>
            I agree to all{" "}
            <span style={{ color: "#44c38c" }}>terms & policy</span>
          </span>

          <div style={{ marginTop: "15%" }}>
            <button className="loginBtn" onClick={() => navigate("/home")}>
              OPEN ACCOUNT
            </button>
            <br />
            <button
              className="ReisterBtn"
              onClick={() => {
                handleShow();
                close();
                navigate("/home");
              }}
            >
              LOGIN
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <Nav /> */}
      <div className="CouponCard">
        <div className="CoupanImg">
          <img src={Image2} alt="Coupon" />
        </div>
        <div className="CoupanImg">
          <img src={Image2} alt="Coupon" />
        </div>
        <div className="CoupanImg">
          <img src={Image2} alt="Coupon" />
        </div>
      </div>
      <div className="desc">
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </p>
      </div>
    </>
  );
};

export default Homescreen;

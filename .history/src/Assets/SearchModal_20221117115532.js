/** @format */

import React from "react";
import { Navbar } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Coupon from "../Images/Group 537.png";


const SearchModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function Seacr(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="MyModal">
        <img src={Coupon} alt="Coupon" className="CouponImg" />
        <form
          className="LoginForm"
          style={{ marginTop: "2%", marginBottom: "10%" }}
        >
          <input type={"text"} placeholder="Customer Name" />
          <br />
          <br />
          <input type={"email"} placeholder="Customer Email" />
          <br />
          <br />
          <input type={"text"} placeholder="Customer Id" />
          <br />
          <br />
          <button className="sendBtn" onClick={() => setModalShow(false)}>
            {" "}
            SEND
          </button>
        </form>
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
      <Navbar Modal={MyVerticallyCenteredModal} />
    </>
  );
};

export default SearchModal;

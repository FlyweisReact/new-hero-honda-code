/** @format */

import React from "react";
import Modal from "react-bootstrap/Modal";
import Coupon from "../Images/Group 537.png";


const SearchModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default SearchModal;

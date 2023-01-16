/** @format */

import { Modal } from "react-bootstrap";
import Coupon from "../Images/Group 537.png";

function SearchModal(props) {
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
          <input type={"text"} placeholder="Regestra Name" />
          <br />
          <br />

          <button className="searchBtn2" onClick={() => props.setOpen(false)}>
            {" "}
            SEARCH
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;

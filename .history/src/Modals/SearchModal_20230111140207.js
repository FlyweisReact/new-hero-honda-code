/** @format */

import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Coupon from "../Images/Group 537.png";

function SearchModal(props) {

  const navigate = useNavigate()

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
          <input type={"text"} placeholder="Regestration / Vin Number" />
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

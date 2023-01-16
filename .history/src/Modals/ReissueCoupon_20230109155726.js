
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Coupon from "../Images/Group 537.png";

function ReissueCoupon(props) {
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
            <input type={"text"} placeholder="Registration  Number" />
            <br />
            <br />
            <input type={"email"} placeholder="Customer Email" />
            <br />
            <br />
            <input type={"tel"} pattern="[0-9]10" placeholder="Mobile Number" />
            <br />
            <br />
            {/* <input type={"text"} placeholder="Coupon Code " />
            <br />
            <br /> */}
            {/* <input type={"date"} placeholder="Coupon Validity " />
            <br />
            <br /> */}
            <button className="sendBtn" onClick={() => props.setRessiue(false)}>
              {" "}
              SEARCH
            </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  export default ReissueCoupon

import { Modal } from "react-bootstrap";
import Coupon from "../Images/Group 537.png";

function PromocodeModal(props) {
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
            <input type={"tel"} pattern="[0-9]10" placeholder="Mobile Number" />
            <br />
            <br />
          <select>
            <option>Agent Name</option>
            <option>First Agent</option>
            <option>Second Agent</option>
          </select>
            <br />
            <br />
          <select>
            <option>Customer Type</option>
            <option>New</option>
            <option>Renewal</option>
            <option>Rollover</option>
            <option>Program-Honda</option>
            <option>Program-Non Honda</option>
            <option>Non-Program</option>
          </select>
            <br />
            <br />
          <select>
            <option>Make</option>
          </select>
            <br />
            <br />
          <select>
            <option>Modal</option>
          </select>
            <br />
            <br />
            <input type={"number"} placeholder="Reg No" />
            <br />
            <br />
            <input type={"number"} placeholder="Policy No" />
            <br />
            <br />
            <input type={"number"} placeholder="Insurer Name No" />
            <br />
            <br />
            <button className="sendBtn" onClick={() => props.setModalShow(false)}>
              {" "}
              SEND
            </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  export default PromocodeModal
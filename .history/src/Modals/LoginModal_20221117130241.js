import { Modal } from "react-bootstrap";

function LoginModal(props) {
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
              props.setModalShow(false);
              props.handleShow();
            }}
          >
            Login
          </button>
          <br />
          <button
            className="login "
            onClick={() => {
             props.setModalShow(false);
              props.open();
            }}
          >
            Register
          </button>
        </Modal.Body>
      </Modal>
    );
  }


  export 
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
             props.setModalShow(false);
              open();
            }}
          >
            Register
          </button>
        </Modal.Body>
      </Modal>
    );
  }
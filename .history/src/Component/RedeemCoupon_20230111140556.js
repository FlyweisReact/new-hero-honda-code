import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal';


function ResendCopuon(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Redeem Coupon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Form>
                <Form.Group className='my-3'>
                    <Form.Label>OTp</Form.Label>
                </Form.Group>
            </Form>
        </Container>
       
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  

const RedeemCoupon = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
       <ResendCopuon
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
  
        <NavBar />
        <img src={BodyImage} alt="--" className="SearchImg" />
        <Container className="NewConT">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "3%",
            }}
          >
            <h2>Redeem Coupon</h2>
            <Button variant="outline-success">Export Data</Button>
          </div>
  
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Customer Email</th>
                <th>Customer Contact</th>
                <th>Coupon Code</th>
                <th>Coupon Activation Date</th>
                <th>Coupon Expiry Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer1</td>
                <td>Customer@gamil.com</td>
                <td>1245369780</td>
                <td>KSHD45</td>
                <td>12/05/2022</td>
                <td>12/05/2023</td>
                <td>
                  <Button style={{backgroundColor : 'transparent' , color : 'black' , border : '1px solid black'}}  onClick={() => setModalShow(true)}>Redeem</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
  };

export default RedeemCoupon
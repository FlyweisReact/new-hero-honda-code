/** @format */

import React from "react";
import { Button, Container } from "react-bootstrap";
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
         Resend Coupon
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p style={{textAlign : 'center' , fontSize : '1.8rem'}}>Are you want Resend Coupon ?</p>
      <div style={{display : 'flex' , justifyContent : 'center' , }}>
        <Button>No</Button>
        <Button variant="outline-success">Yes</Button>
      </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}




const SearchSummary = () => {
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
          <h2>Search Result</h2>
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
                <Button style={{backgroundColor : 'transparent' , color : 'black' , border : '1px solid black'}}  onClick={() => setModalShow(true)}>Resend</Button>
              </td>
            </tr>
            <tr>
              <td>Customer1</td>
              <td>Customer@gamil.com</td>
              <td>1245369780</td>
              <td>KSHD45</td>
              <td>12/05/2022</td>
              <td>12/05/2023</td>
              <td>
                {" "}
                <Button style={{backgroundColor : 'transparent' , color : 'black' , border : '1px solid black'}}  onClick={() => setModalShow(true)}>Resend</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default SearchSummary;

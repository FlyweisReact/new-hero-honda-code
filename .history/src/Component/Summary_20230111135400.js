/** @format */

import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from "react-bootstrap/Table";

function CouponView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       Coupon Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={{overflowX}}
       <Table striped bordered hover>

       </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Summary = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const coupon = [
    {
      customer: "Customer",
      CouponCode: "JKDS32",
      CustomerEmial: "customer@gmail.com",
      number: "123456720",
      Ad: "02/10/2004",
      Ed: "14/5/2005",
    },
    {
      customer: "Customer",
      CouponCode: "JKDS32",
      CustomerEmial: "customer@gmail.com",
      number: "123456720",
      Ad: "02/08/2012",
      Ed: "04/12/2020",
    },
  ];

  return (
    <>
      <CouponView show={modalShow} onHide={() => setModalShow(false)} />

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
          <h2>Summary</h2>
          <Button variant="outline-success">Download Data</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Coupon Code</th>
              <th>Customer Email</th>
              <th>Customer Contact</th>
              <th>Coupon Activation Date</th>
              <th>Coupon Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {coupon.map((i, index) => (
              <tr key={index}>
                <td>
                  <Button onClick={() => setModalShow(true)}>View</Button>
                </td>
                <td> {i.customer} </td>
                <td> {i.CouponCode} </td>
                <td> {i.CustomerEmial} </td>
                <td> {i.number} </td>
                <td> {i.Ad} </td>
                <td> {i.Ed} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Summary;

import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from 'react-bootstrap/Table';

const Summary = () => {
  return (
   <>
        <NavBar />
        <img src={BodyImage} alt="--" className="SearchImg" />
        <Container className="NewConT">
        <h2 style={{textAlign : 'center' , marginBottom : '10px'}}>Summary</h2>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Coupon Code</th>
          <th>Customer Email</th>
          <th>Customer Contact</th>
          <th>Coupon Activation Date</th>
          <th>Coupon Expiry Date</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Customer1</td>
        <td>KSHD45</td>
        <td>Customer@gamil.com</td>
        <td>1245369780</td>
        <td>12/05/2022</td>
        <td>12/05/20   23</td>
      </tr>
      </tbody>
    </Table>
        </Container>
   </>
  )
}

export default Summary
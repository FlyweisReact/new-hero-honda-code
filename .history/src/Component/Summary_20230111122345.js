import React from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from 'react-bootstrap/Table';

const Summary = () => {

  const data =[1, 43, 432 ,20 , 5]
  console.log(data.map((i) => i))
  const newData = data.filter(check)
  function  check (number) {
    return number > 1
  }


  console.log(newData)


  return (
   <>
        <NavBar />
        <img src={BodyImage} alt="--" className="SearchImg" />
        <Container className="NewConT">
        <div style={{display : 'flex' , justifyContent : 'space-between' , marginBottom : '3%'}}>

            <h2>Summary</h2>
            <Button variant="outline-success">
                Download Data
            </Button>
        </div>

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
        <td>12/05/2023</td>
      </tr>
      <tr>
        <td>Customer1</td>
        <td>KSHD45</td>
        <td>Customer@gamil.com</td>
        <td>1245369780</td>
        <td>12/05/2022</td>
        <td>12/05/2023</td>
      </tr>
      </tbody>
    </Table>
        </Container>
   </>
  )
}

export default Summary
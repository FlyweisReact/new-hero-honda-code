import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from 'react-bootstrap/Table';
import moment from "moment";

const Summary = () => {

  const [startDate , setStartDate] = useState('')
  const [endDate , setEndDate] = useState('')



  console.log(startDate)
  console.log(endDate)

  moment()


  const coupon = [
    {
      customer : 'Customer' , 
      CouponCode : 'JKDS32' , 
      CustomerEmial : 'customer@gmail.com',
      number : '123456720',
      Ad : '12/2/2004',
      Ed : '14/5/2005'
    }
  ]

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

        <input type={'date'} onChange={(e) => setStartDate(e.target.value)} />
        <input type={'date'} onChange={(e) => setEndDate(e.target.value)} />

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
      {coupon.map((i,index) => (
        <tr  key={index}>
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
  )
}

export default Summary
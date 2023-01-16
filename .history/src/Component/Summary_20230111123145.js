import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from 'react-bootstrap/Table';

const Summary = () => {

  const [stdate  ,setDate] = useState('')
  const [edingDate , setEdingDate] = useState('')


  console.log('startingDate')
  console.log(stdate)
console.log('--------------------------------')

  console.log('edign Date')
  console.log(edingDate)
console.log('--------------------------------')


  const data =[1, 2,3,4,5]
  const newData = data.filter(check)
  function  check (number) {
    // return (
    //   // number >1 && number <4
    // )
  }


  console.log(newData)


  const coupon = [
    {
      customer : 'Customer' , 
      CouponCode : 'JKDS32'
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

        <input type={'date'} onChange={(e) => setDate(e.target.value)}  />
        <input type={'date'} onChange={(e) => setEdingDate(e.target.value)}  />

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
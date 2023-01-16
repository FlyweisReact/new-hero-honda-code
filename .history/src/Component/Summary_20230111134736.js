/** @format */

import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from "react-bootstrap/Table";
import moment from "moment";

const Summary = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const myNewStartingDate = moment(startDate).format("DD/MM/YYYY");
  const myNewEndingDate = moment(endDate).format("DD/MM/YYYY");

  const filteredData = startDate.length <= 2 ? coupon : coupon.filter((i) => i.Ad >= myNewStartingDate   ?  i.Ad >= myNewStartingDate  : coupon );


    const newF = coupon.filter((i) => i.Ad>= myNewStartingDate && i.Ed <= my )


    console.log(newF)

  





  // const filterData = !query
  //   ? data?.Users
  //   : data?.Users?.filter(
  //       (i) =>
  //         i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
  //         i?.phoneNumber
  //           ?.toString()
  //           ?.toLowerCase()
  //           .includes(query?.toLowerCase())
  //     );

  return (
    <>
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

        <input
          type={"date"}
          onChange={(e) =>
            moment(setStartDate(e.target.value)).format("DD-MM-YYYY")
          }
        />
        <input type={"date"} onChange={(e) => setEndDate(e.target.value)} />

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
            {filteredData?.map((i, index) => (
              <tr key={index}>
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

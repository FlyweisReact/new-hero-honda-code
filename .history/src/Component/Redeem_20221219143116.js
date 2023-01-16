import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Image from "./Group 537.png";

const Redeem = () => {
  return (
   <>
      <NavBar />
      <img src={BodyImage} alt="--" className="SearchImg" />
      <img src={Image} alt="--" className="Hero"/>
      <Container className="search">
        <form className="searchForm">
          <input type={"text"} placeholder="Coupons Code" />
          <br />
          <br />
          <input type={"text"} placeholder="Regestration Number / Vin Number" />
          <br />
          <br />
          <button className="searchBtn">    REDEEM</button>
        </form>
      </Container>
   </>
  )
}

export default Redeem
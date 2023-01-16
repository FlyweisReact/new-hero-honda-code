/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Image from "./Group 537.png";

const Search = () => {
  return (
    <>
      <NavBar />
      <img src={BodyImage} alt="--" className="SearchImg" />
      <img src={Image} alt="--" className="Hero"/>
      <Container className="search">
        <form className="searchForm">
          <input type={"text"} placeholder="Mobile Number" />
          <br />
          <br />
          <input type={"email"} placeholder="Car Regestration" />
          <br />
          <br />
          <input type={"text"} placeholder="Customer Name" />
          <br />
          <br />
          <button className="searchBtn">SEND</button>
        </form>
      </Container>
    </>
  );
};

export default Search;

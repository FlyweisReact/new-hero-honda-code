/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";

const Search = () => {
  return (
    <>
      <NavBar />
      <Container className="search">
      <form className="searchForm">
        <input type={"text"} placeholder="Customer Name" />
        <br />
        <br />
        <input type={"email"} placeholder="Customer Email" />
        <br />
        <br />
        <input type={"text"} placeholder="Customer Id" />
        <br />
        <br />
        <button className="sendBtn">SEND</button>
      </form>
      </Container>
      <div >
     
      </div>
     
    </>
  );
};

export default Search;

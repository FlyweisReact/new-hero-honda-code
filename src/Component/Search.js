/** @format */

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Image from "./Group 537.png";

const Search = () => {
  const [field, setField] = useState(false);

  return (
    <>
      <NavBar />
      <img src={BodyImage} alt="--" className="SearchImg" />
      <img src={Image} alt="--" className="Hero" />
      <Container className="search">
        <form className="searchForm">
          <div className="mb-3">
            <input type={"text"} placeholder="Customer Name" />
          </div>
          <div className="mb-3">
            <input type={"email"} placeholder="Email ID" />
          </div>
          <div className="mb-3">
            <input type={"text"} placeholder="Mobile Number" />
          </div>
          <div className="mb-3 ">
            <select className="dropdownS">
              <option>Select Agent Name</option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div className="mb-3">
            <select className="dropdownS">
              <option>Select Customer type</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="mb-3">
            <input type={'text'} placeholder='Reg No.' />
          </div>
          <div className="mb-3">
            <select className="dropdownS">
              <option>Make</option>
              <option></option>
            </select>
          </div>
          <div className="mb-3">
            <select className="dropdownS">
              <option>Model</option>
              <option></option>
            </select>
          </div>
          <div className="mb-3">
            <input type={"number"} placeholder="Policy Number" />
          </div>
          <div className="mb-3">
            <input type={"number"} placeholder="Policy Expiry" />
          </div>
          <div className="mb-3">
            <input type={"number"} placeholder="Insurer name" />
          </div>
          <div className="mb-3">
            <input type={"text"} placeholder="Premium" />
          </div>
          <div className="mb-3">
            <input type={"text"} placeholder="Coupon Code" />
          </div>
          <div className="mb-3">
            <select className="dropdownS">
              <option>Service Offered</option>
              <option></option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type={"text"}
              placeholder="Coupon Validity"
              onChange={() => setField(true)}
            />
          </div>
          <button className="searchBtn">{field ? "Send" : "SEARCH"}</button>
        </form>
      </Container>
    </>
  );
};

export default Search;

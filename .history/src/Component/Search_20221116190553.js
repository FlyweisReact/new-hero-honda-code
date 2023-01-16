/** @format */

import React from "react";
import NavBar from "../Assets/Navbar";

const Search = () => {
  return (
    <>
      <NavBar />
      <form className="search">
        <input type={"text"} placeholder="Customer Name" />
        <br />
        <br />
        <input type={"email"} placeholder="Customer Email" />
        <br />
        <br />
        <input type={"text"} placeholder="Customer Id" />
        <br />
        <br />
        <button className="sendBtn"> SEND</button>
      </form>
    </>
  );
};

export default Search;

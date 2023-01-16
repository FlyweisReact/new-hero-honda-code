import React from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal';


function ResendCopuon(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Resend Coupon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{textAlign : 'center' , fontSize : '1.8rem'}}>Are you want Resend Coupon ?</p>
        <div style={{display : 'flex' , justifyContent : 'center' , gap : '20px', marginTop : '20px '}}>
          <Button style={{width : '200px'}} onClick={() => props.onHide()} >No</Button>
          <Button variant="outline-success"  style={{width : '200px'}} onClick={() =>  {
         alert('Coupon Resend')
         props.onHide()
          }} >Yes</Button>
        </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  

const RedeemCoupon = () => {
  return (
    <div>RedeemCoupon</div>
  )
}

export default RedeemCoupon
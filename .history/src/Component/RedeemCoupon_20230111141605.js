/** @format */

import React , { useCallback, useMemo, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";


import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';




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
          Redeem Coupon
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container style={{ width: "400px" }}>
          <Form>
            <Form.Group className="my-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control type="tel" pattern="[0-9]{4}" />
            </Form.Group>
            <Button>Verify</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}


var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('/');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
    minValidYear: 2000,
    maxValidYear: 2021,
    inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
  };

  



const RedeemCoupon = () => {
  const [modalShow, setModalShow] = React.useState(false);


  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete' },
    {
      field: 'date',
      filter: 'agDateColumnFilter',
      filterParams: filterParams,
    },
    { field: 'total', filter: false },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);




  return (
    <>
      <ResendCopuon show={modalShow} onHide={() => setModalShow(false)} />

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
          <h2>Redeem Coupon</h2>
          <Button variant="outline-success">Export Data</Button>
        </div>


        <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>


    

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Customer Email</th>
              <th>Customer Contact</th>
              <th>Coupon Code</th>
              <th>Coupon Activation Date</th>
              <th>Coupon Expiry Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer1</td>
              <td>Customer@gamil.com</td>
              <td>1245369780</td>
              <td>KSHD45</td>
              <td>12/05/2022</td>
              <td>12/05/2023</td>
              <td>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    alert('OTP sent to your registered mobile number')
                    setModalShow(true)}}
                >
                  Redeem
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default RedeemCoupon;

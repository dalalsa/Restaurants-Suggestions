import React from "react";
import "../App/Header.css";
import {  Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <br />

      <Navbar.Brand href="#home">
        <img
          alt=""
          src="../../assets/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Wain Nakel
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

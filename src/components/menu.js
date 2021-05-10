import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import  favW  from "../assets/favW.png";

export const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">
        <img src={favW} width="40" height="40" class="d-inline-block align-top mr-2" alt=""/>
        Wesele
        </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Informacje</Nav.Link>
        <Nav.Link href="#features">Pytania i Odpowiedzi</Nav.Link>
        {/* <Nav.Link href="#pricing">FAQ</Nav.Link> */}
      </Nav>
    </Navbar>
  );
};

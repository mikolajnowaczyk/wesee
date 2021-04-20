import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Wesele</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Informacje</Nav.Link>
        <Nav.Link href="#features">Noclegi</Nav.Link>
        <Nav.Link href="#pricing">FAQ</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  );
};

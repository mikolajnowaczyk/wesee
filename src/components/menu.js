import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import favW from "../assets/favW.png";

const onClickHandler = (ref) => {
  console.log("on click debug", ref);
  const topOfElement = ref.current.offsetTop - 70;
  window.scroll({ top: topOfElement, behavior: "smooth" });
};

export const Menu = (props, refs) => {
  console.log("MENU PROPS", props);
  console.log("Menu Refs", refs);
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src={favW}
          width="40"
          height="40"
          class="d-inline-block align-top mr-2"
          alt=""
        />
        Wesele
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          href="#info"
          onClick={() => {
            onClickHandler(props.refs.infoRef);
          }}
        >
          Informacje
        </Nav.Link>
        <Nav.Link
          href="#qa"
          onClick={() => {
            onClickHandler(props.refs.QARef);
          }}
        >
          Pytania i Odpowiedzi
        </Nav.Link>
        {/* <Nav.Link href="#pricing">FAQ</Nav.Link> */}
      </Nav>
    </Navbar>
  );
};

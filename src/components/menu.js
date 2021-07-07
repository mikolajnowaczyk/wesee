import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import favW from "../assets/favW.png";
import "./_menu.scss";

const onClickHandler = (ref) => {
  const topOfElement = ref.current.outerHTML
    .toString(ref.current.outerHTML)
    .includes("Mapy")
    ? ref.current.offsetTop - 32
    : ref.current.offsetTop - 90;
  window.scroll({ top: topOfElement, behavior: "smooth" });
};

export const Menu = (props) => {
  return (
    <Navbar
    className="navbar"
      variant="light"
      sticky="top"
      expand="lg"
      collapseOnSelect
      style={{ padding: "0.25rem rem" }}
    >
      <Navbar.Brand
        href="#home"
        onClick={() => {
          onClickHandler(props.refs.heroRef);
        }}
      >
        <img
          src={favW}
          style={{ margin: "auto", width: "1.5rem", height: "1.5rem" }}
          className="d-inline-block align-top mr-2"
          alt=""
        />
        Wesele
      </Navbar.Brand>
      {/* <Navbar.Toggle style={{borderColor: "white", border: "2px white solid"}}/> */}
      <Navbar.Toggle
        style={{ borderColor: "black", border: "2px black solid" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="mr-auto">
          <Nav.Link
            className="mx-auto text-black navlink"
            href="#info"
            onClick={() => {
              onClickHandler(props.refs.infoRef);
            }}
          >
            Informacje
          </Nav.Link>
          <Nav.Link
            className="mx-auto text-black navlink"
            href="#qa"
            onClick={() => {
              onClickHandler(props.refs.QARef);
            }}
          >
            Pytania i Odpowiedzi
          </Nav.Link>
          <Nav.Link
            className="mx-auto text-black navlink"
            href="#maps"
            onClick={() => {
              onClickHandler(props.refs.mapsRef);
            }}
          >
            Mapy
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

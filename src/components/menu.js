import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import favW from "../assets/favW.png";
import "./_menu.scss"

const onClickHandler = (ref) => {
  // console.log("on click debug", ref);
  const topOfElement = ref.current.offsetTop - 90;
  window.scroll({ top: topOfElement, behavior: "smooth" });
};

export const Menu = (props, refs) => {
  return (
      <Navbar bg="primary" variant="dark" sticky="top" expand="lg" collapseOnSelect >
        <Navbar.Brand href="#home" onClick={() => {
                onClickHandler(props.refs.heroRef);
              }}>
          <img
            src={favW}
            width="40"
            height="40"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          Wesele
        </Navbar.Brand>
        <Navbar.Toggle style={{borderColor: "white", border: "2px white solid"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
            className="my-2 mx-auto text-white"
              href="#info"
              onClick={() => {
                onClickHandler(props.refs.infoRef);
              }}
            >
              Informacje
            </Nav.Link>
            <Nav.Link
            className="my-2 mx-auto text-white"
              href="#qa"
              onClick={() => {
                onClickHandler(props.refs.QARef);
              }}
            >
              Pytania i Odpowiedzi
            </Nav.Link>
             <Nav.Link
            className="my-2 mx-auto text-white"
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

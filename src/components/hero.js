import React from "react";
import { Image, Col } from "react-bootstrap";
import heroImg from "../assets/heroMax.jpg";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <>
      <h1 style={{textAlign:"center", fontFamily: 'Sacramento', fontWeight:"700", marginTop:"10px"}}>Ślub oraz wesele Anny i Mikołaja 31.07.2021r.</h1>
      <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }} ref={ref}>
        <Image src={heroImg} fluid></Image>
      </Col>
    </>
  );
});

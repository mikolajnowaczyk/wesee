import React from "react";
import { Image, Col } from "react-bootstrap";
import heroImg from "../assets/hero.jpg";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <>
      <Col xs={{ span: 6, offset: 3 }} ref={ref}>
        <Image src={heroImg} fluid></Image>
      </Col>
    </>
  );
});

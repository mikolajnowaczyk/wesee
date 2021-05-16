import React from "react";
import { Image, Col  } from "react-bootstrap";
import heroImg from '../assets/hero.jpg'

export const Hero = (props) => {
  return (
    <Col xs={{span: 6, offset: 3}} >
    <Image src={heroImg} fluid></Image>
    </Col>
  );
};

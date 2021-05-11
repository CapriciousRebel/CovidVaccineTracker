import { Container, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getCenterByPincode } from "../apis/Api.js";

const Landing = () => {
  useEffect(() => {
    getCenterByPincode(123321)
  });
  return (
    <Container fluid>
      <Col>
        <Row>Row 1</Row>
        <Row>Row 2</Row>
        <Row>Row 3</Row>
      </Col>
    </Container>
  );
};

export default Landing;

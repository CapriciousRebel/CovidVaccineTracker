import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { TypeFilter } from "./TypeFilter.js";

export const Filters = () => {
  const [type, setType] = useState({
    Covishield: false,
    Covaxin: false,
    Free: false,
    Paid: false,
    "18+": false,
    "45+": false,
  });

  return (
    <Container fluid >
      <Row className="border-bottom">
        <TypeFilter type={type} setType={setType} name="Covaxin" />
        <TypeFilter type={type} setType={setType} name="Covishield" />
        <TypeFilter type={type} setType={setType} name="Free" />
        <TypeFilter type={type} setType={setType} name="Paid" />
        <TypeFilter type={type} setType={setType} name="18+" />
        <TypeFilter type={type} setType={setType} name="45+" />
      </Row>
    </Container>
  );
};

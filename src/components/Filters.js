import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { TypeFilter } from "./TypeFilter.js";

export const Filters = (props) => {
  return (
    <Container fluid>
      <Row className="border-bottom">
        <TypeFilter type={props.type} setType={props.setType} name="Covaxin" />
        <TypeFilter
          type={props.type}
          setType={props.setType}
          name="Covishield"
        />
        <TypeFilter type={props.type} setType={props.setType} name="Free" />
        <TypeFilter type={props.type} setType={props.setType} name="Paid" />
        <TypeFilter type={props.type} setType={props.setType} name="18+" />
        <TypeFilter type={props.type} setType={props.setType} name="45+" />
      </Row>
    </Container>
  );
};

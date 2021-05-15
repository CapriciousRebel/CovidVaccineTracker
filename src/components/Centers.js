import { useEffect, useState } from "react";

import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";

import { Center } from "./Center";

export const Centers = (props) => {
  return (
    <>
      <Row className="border-bottom">
        <Col xs={6}>
          <p className="font-weight-bold">Name</p>
        </Col>
        <Col>Capacity</Col>
        <Col>Date</Col>
      </Row>
      {props.availableSessions ? (
        props.availableSessions.map((session, index) => (
          <Center
            key={index}
            name={session.name}
            available_capacity={session.available_capacity}
            date={session.date}
          />
        ))
      ) : (
        <h3 className="m-0">
          No slots available right now satisfying the requirements, you'll be
          notified when slots are found...
        </h3>
      )}
    </>
  );
};

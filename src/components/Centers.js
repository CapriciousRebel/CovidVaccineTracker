import { useEffect, useState } from "react";

import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";

import { Center } from "./Center";

export const Centers = (props) => {
  const isVaccineRight = (vaccine) => {
    return props.filterType[
      vaccine.charAt(0) + vaccine.substring(1).toLowerCase()
    ];
  };

  const isAgeRight = (age) => {
    return props.filterType[age + "+"];
  };

  const isPriceRight = (price) => {
    return props.filterType[price];
  };

  const getAvailableSessions = () => {
    let availableSessions = [];

    props.fetchedCenters.forEach((center) => {
      center.sessions.forEach((session) => {
        if (session.available_capacity !== 0) {
          if (
            isPriceRight(center.fee_type) &&
            isVaccineRight(session.vaccine) &&
            isAgeRight(session.min_age_limit)
          ) {
            availableSessions.push({
              name: center.name,
              available_capacity: session.available_capacity,
              date:
                session.date.split("-")[0] + "/" + session.date.split("-")[1],
            });
          }
        }
      });
    });
    return availableSessions;
  };

  useEffect(() => {
    console.log("centers mounted");
  });

  return (
    <>
      <Row className="border-bottom">
        <Col xs={6}>
          <p className="font-weight-bold">Name</p>
        </Col>
        <Col>Capacity</Col>
        <Col>Date</Col>
      </Row>
      {props.fetchedCenters && getAvailableSessions().length !== 0 ? (
        getAvailableSessions().map((session, index) => (
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

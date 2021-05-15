import { useEffect, useState } from "react";

import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";

import { Center } from "./Center";

export const Centers = (props) => {
  const getAvailableSessions = () => {
    let availableSessions = [];

    props.fetchedCenters.forEach((center) => {
      center.sessions.forEach((session) => {
        if (session.available_capacity !== 0) {
          availableSessions.push({
            name: center.name,
            available_capacity: session.available_capacity,
            date: session.date.split("-")[0] + "/" + session.date.split("-")[1],
          });
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
      {props.fetchedCenters ? (
        getAvailableSessions().map((session) => (
          <Center
            name={session.name}
            available_capacity={session.available_capacity}
            date={session.date}
          />
        ))
      ) : (
        <h2>bye</h2>
      )}
    </>
  );

  //   const displayCenters = () => {
  //     let availableCenters = getAvailableCenters();
  //     console.log(availableCenters);
  //     if (availableCenters.length !== 0) {
  //       return submitOnce && centers.length !== 0
  //         ? centers.map((center, index) =>
  //             center.sessions.map((session) => <Center />)
  //           )
  //         : submitOnce && (
  //             <h3 className="m-0">
  //               No centers available right now satisfying the requirements, you'll
  //               be notified when slots are found...
  //             </h3>
  //           );
  //     }
  //   };
};

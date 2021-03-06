import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { getCenterByPincode } from "../apis/Api.js";
import useSound from "use-sound";
import notificationSound from "../sounds/notification.mp3";

export const Input = (props) => {
  const [pincodeInput, setPincodeInput] = useState(""); // Pincode set as the user types
  const [pincodeCurrent, setPincodeCurrent] = useState(""); // Pincode after user presses submit
  const [playNotification] = useSound(notificationSound);
  const [currentInterval, setCurrentInterval] = useState(null); // The current async api call loop

  /**
   * returns true if the vaccine type returned by the api matches the one chosen by the user
   */
  const isVaccineRight = (vaccine) => {
    console.log("is vaccine right: ", props.filterType);
    return props.filterType[
      vaccine.charAt(0) + vaccine.substring(1).toLowerCase()
    ];
  };
  /**
   * returns true if the age returned by the api matches the one chosen by the user
   */
  const isAgeRight = (age) => {
    return props.filterType[age + "+"];
  };
  /**
   * returns true if the price returned by the api matches the one chosen by the user
   */
  const isPriceRight = (price) => {
    return props.filterType[price];
  };

  /**
   * Makes the API call and fetches the Centers and stores in state
   */
  const fetchCenters = async () => {
    console.log("fetching...");
    getCenterByPincode(pincodeInput)
      .then((centers) => {
        let availableSessions = [];
        centers.data.centers.forEach((center) => {
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
                    session.date.split("-")[0] +
                    "/" +
                    session.date.split("-")[1],
                });
              }
            }
          });
        });
        //console.log("available after fetch and filter: ", availableSessions);
        if (availableSessions.length !== 0) {
          playNotification();
          props.setAvailableSessions(availableSessions);
        } else {
          props.setAvailableSessions(null);
        }
      })
      .catch((error) => {
        console.log("Error while fetching data for pincode: ", error);
        props.setAvailableSessions(null);
      });
  };

  /**
   * Handles the Submit action for the pincode Input
   */
  const handleSubmit = async () => {
    props.setSubmitOnce(true);
    setPincodeCurrent(pincodeInput);
    fetchCenters();
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    setCurrentInterval(setInterval(fetchCenters, 5000));
  };

  /**
   * Handles the pincode input event
   */
  const handlePincodeInput = (e) => {
    setPincodeInput(e.target.value);
  };

  return (
    <Container className="d-flex flex-column align-items-center ">
      <Col className="w-15rem pt-5">
        <Row>
          <TextField
            id="standard-basic"
            label="Enter an Indian pincode..."
            onChange={(e) => handlePincodeInput(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </Row>
        <Row className="mt-5 w-10rem">
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            className=" align-self-center"
          >
            Submit
          </Button>
        </Row>
      </Col>

      {props.submitOnce && pincodeInput ? (
        <Row className="d-flex align-items-start my-5 py-2 border-top border-bottom">
          <Col xs={1}>
            <Spinner size="sm" animation="grow" />
          </Col>
          <Col>
            <p className="m-0">Tracking for pincode: {pincodeCurrent}</p>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

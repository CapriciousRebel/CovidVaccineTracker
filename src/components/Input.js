import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { getCenterByPincode } from "../apis/Api.js";

export const Input = (props) => {
  const [pincodeInput, setPincodeInput] = useState(""); // Pincode set as the user types
  const [pincodeCurrent, setPincodeCurrent] = useState(""); // Pincode after user presses submit
  const [currentInterval, setCurrentInterval] = useState(null); // The current async api call loop

  /**
   * Makes the API call and fetches the Centers and stores in state
   */
  const fetchCenters = async () => {
    console.log("requesting: ", pincodeInput);
    let centers = await getCenterByPincode(pincodeInput);
    centers = centers.data.centers;
    props.setFetchedCenters(centers);
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
    <Container className="d-flex flex-column align-items-center">
      <Row className="w-15rem pt-5">
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
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          className="mt-5 w-5rem align-self-center"
        >
          Submit
        </Button>
      </Row>

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

import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { getCenterByPincode } from "../apis/Api.js";

export const Input = (props) => {
  const [pincodeInput, setPincodeInput] = useState("");
  const [pincodeCurrent, setPincodeCurrent] = useState("");
  const [submitOnce, setSubmitOnce] = useState(false);
  const [centers, setCenters] = useState([]);
  const [currentInterval, setCurrentInterval] = useState(null);

  const fetchCenters = async () => {
    console.log("requesting: ", pincodeInput);
    let centers = await getCenterByPincode(pincodeInput);
    centers = centers.data.centers;
    setCenters(centers);
  };

  const handleSubmit = async () => {
    setSubmitOnce(true);
    setPincodeCurrent(pincodeInput);
    fetchCenters();
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    setCurrentInterval(setInterval(fetchCenters, 5000));
  };

  const handlePincodeInput = (e) => {
    setPincodeInput(e.target.value);
  };

  const centerAvailable = () => {
    let available = true;
    centers.forEach((center) => {});
    return available;
  };

  const satisfiesCriteria = (center) => {
    return true;
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

      {submitOnce ? (
        <Row className="d-flex align-items-start my-5 py-2 border-top border-bottom">
          <Col xs={1}>
            <Spinner size="sm" animation="grow" />
          </Col>
          <Col>
            <p className="m-0">Tracking for pincode: {pincodeCurrent}</p>
          </Col>
        </Row>
      ) : null}

      {submitOnce && centers.length !== 0 && centerAvailable()
        ? centers.map(
            (center, index) =>
              satisfiesCriteria(center) && (
                <Row className="border-bottom" key={index}>
                  <Col>{center.name}</Col>
                  <Col>
                    Capacity = {center.sessions[0].available_capacity}
                  </Col>{" "}
                </Row>
              )
          )
        : submitOnce && (
            <h3 className="m-0">
              No centers available right now satisfying the requirements, you'll
              be notified when slots are found...
            </h3>
          )}
    </Container>
  );
};

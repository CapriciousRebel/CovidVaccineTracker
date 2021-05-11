import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { getCenterByPincode } from "../apis/Api.js";

const Landing = () => {
  const [pincode, setPincode] = useState("");

  const handleSubmit = () => {
    getCenterByPincode(pincode);
    setInterval(() => {
      getCenterByPincode(400058);
    }, 5000);
  };

  const handlePincodeInput = (e) => {
    setPincode(e.target.value);
  };

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col></Col>
        <Col xs={8}>
          <Form className="d-flex flex-column">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter an Indian pincode..."
                onChange={(e) => handlePincodeInput(e)}
                className="mb-5 w-10rem"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              className="w-10rem align-self-center"
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Landing;

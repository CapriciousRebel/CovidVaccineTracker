import { Container, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getCenterByPincode } from "../apis/Api.js";

const Landing = () => {
  const [pincode, setPincode] = useState(0);

  const handleSubmit = () => {
    getCenterByPincode(pincode);
  };

  const handlePincodeInput = (e) => {
    console.log(e.target.value);
    setPincode(e.target.value);
  };

  useEffect(() => {
    getCenterByPincode(400058);
    setInterval(() => {
      getCenterByPincode(400058);
    }, 5000);
  });

  return (
    <Container fluid>
      <Col>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" placeholder="Enter pincode" />
            <Form.Text
              className="text-muted"
              onChange={(e) => handlePincodeInput(e)}
            >
              Enter an Indian pincode...
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Landing;

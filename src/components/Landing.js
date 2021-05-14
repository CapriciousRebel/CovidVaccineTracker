import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getCenterByPincode } from "../apis/Api.js";
import { delay } from "../utils/utils.js";
import Switch from "@material-ui/core/Switch";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TextField from "@material-ui/core/TextField";
import { Filters } from "./Filters.js";

const Landing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [pincode, setPincode] = useState("");
  const [centers, setCenters] = useState([]);
  const [currentInterval, setCurrentInterval] = useState(null);

  const fetchCenters = async () => {
    let centers = await getCenterByPincode(pincode);
    centers = centers.data.centers;
    setCenters(centers);
  };

  const handleSubmit = () => {
    fetchCenters();
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    setCurrentInterval(setInterval(fetchCenters, 5000));
  };

  const switchMenu = () => {
    setShowFilters(!showFilters);
  };

  const handlePincodeInput = (e) => {
    setPincode(e.target.value);
  };

  return (
    <Container fluid>
      <Container
        className="d-flex align-items-center justify-content-center border-bottom"
        onClick={switchMenu}
      >
        <h5 className="m-0">Filters</h5>
        {showFilters ? (
          <ExpandLessIcon fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}
      </Container>
      {showFilters ? <Filters /> : null}
      <Row className="my-5 w-20rem">
        <TextField
          id="standard-basic"
          label="Enter an Indian pincode..."
          onChange={(e) => handlePincodeInput(e)}
        />
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          className="w-10rem align-self-center"
        >
          Submit
        </Button>
      </Row>
      <Row>{centers ? <h3>Found {centers.length} centres</h3> : null}</Row>
      {centers.map((center) => (
        <Row className="border-bottom">
          <Col>{center.name}</Col>
          <Col>Capacity = {center.sessions[0].available_capacity}</Col>{" "}
        </Row>
      ))}
    </Container>
  );
};

export default Landing;

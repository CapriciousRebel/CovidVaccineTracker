import { Container, Col, Row, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getCenterByPincode } from "../apis/Api.js";
import { delay } from "../utils/utils.js";
import Switch from "@material-ui/core/Switch";

const Landing = () => {
  const [pincode, setPincode] = useState("");
  const [type, setType] = useState({
    Covishield: false,
    Covaxin: false,
    Free: false,
    Paid: false,
    "18+": false,
    "45+": false,
  });
  const [centers, setCenters] = useState([]);
  const [currentInterval, setCurrentInterval] = useState(null);

  const handleType = (e) => {
    let newtype = { ...type };
    let filter = e.target.id;
    let filterState = newtype[filter];
    newtype[filter] = !filterState;
    setType(newtype);
  };

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

  const handlePincodeInput = (e) => {
    setPincode(e.target.value);
  };
  const handleSwitch = (e) => {
    let newtype = { ...type };
    newtype[e.target.name] = e.target.checked;
    setType(newtype);
  };

  useEffect(() => {
    if (type) {
      console.log(type);
    }
  }, [type]);

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col></Col>
        <Col lg={10} xs={10}>
          <Row>
            <Row className="p-2 w-10rem d-flex align-items-center justify-content-center">
              <Col>
                <Switch
                  checked={type.Covaxin}
                  onChange={handleSwitch}
                  name="Covaxin"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Col>
              <Col>Covaxin</Col>
            </Row>
            <Row className="p-2 w-10rem d-flex align-items-center">
              <Col>
                <Switch
                  checked={type.Covishield}
                  onChange={handleSwitch}
                  name="Covishield"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Col>
              <Col>Covishield</Col>
            </Row>
            <Row className="p-2 w-10rem d-flex align-items-center">
              <Col>
                <Switch
                  checked={type.Free}
                  onChange={handleSwitch}
                  name="Free"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Col>
              <Col>Free</Col>
            </Row>
            <Row className="p-2 w-10rem d-flex align-items-center">
              <Col>
                <Switch
                  checked={type.Paid}
                  onChange={handleSwitch}
                  name="Paid"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Col>
              <Col>Paid</Col>
            </Row>
            <Row className="p-2 w-10rem d-flex align-items-center">
              <Col>
                <Switch
                  checked={type["18+"]}
                  onChange={handleSwitch}
                  name="18+"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Col>
              <Col>18+</Col>
            </Row>
            <Row className="p-2 w-10rem d-flex align-items-center">
              <Col>
                <Switch
                  checked={type["45+"]}
                  onChange={handleSwitch}
                  name="45+"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Col>
              <Col>45+</Col>
            </Row>
          </Row>
          <Row className="my-5 w-20rem">
            <input
              type="text"
              placeholder="Enter an Indian pincode..."
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
        </Col>
        <Col></Col>
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

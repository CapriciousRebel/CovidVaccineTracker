import { Container, Row, Col } from "react-bootstrap";
import logo192 from "../images/logo192.png";

const MyNavbar = () => {
  return (
    <Container style={{ backgroundColor: "#0CB8CF" }} className="h-10">
      <Row className="d-flex align-items-center justify-content-center h-100">
        <Col
          xs={3}
          className="d-flex flex-row align-items-center justify-content-center"
        >
          <img
            alt="Covid Vaccine Tracker"
            src={logo192}
            height="40"
            width="40"
            className="d-inline-block align-top"
          />
        </Col>
        <Col xs={9}>
          <h2>Covid Vaccine Tracker</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNavbar;

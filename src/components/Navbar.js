import { Container, Row, Col } from "react-bootstrap";
import app_logo from "../images/logo.png";

const MyNavbar = () => {
  return (
    <Container fluid style={{ backgroundColor: "#0CB8CF" }} className="h-10">
      <Row className="d-flex flex-row  align-items-center w-100 h-100">
        <Col
          xs={1}
          className="d-flex flex-row  align-items-center justify-content-center"
        >
          <img
            alt="Covid Vaccine Tracker"
            src={app_logo}
            height="40"
            width="40"
            className="d-inline-block align-top "
          />
        </Col>
        <Col>
          <h3 className="">Covid Vaccine Tracker</h3>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default MyNavbar;

import { Container, Row, Col } from "react-bootstrap";
import logo192 from "../images/logo192.png";
import { openInNewTab } from "../utils/utils";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const MyNavbar = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#0CB8CF" }}
      className="h-10 m-0"
    >
      <Row className="d-flex align-items-center  h-100">
        <Col
          xs={3}
          lg={1}
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
        <Col xs={9} lg={9}>
          <h2>Covid Vaccine Tracker</h2>
        </Col>
        <Col
          className="d-flex justify-content-start d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block"
          xs={0}
        >
          <span
            onClick={() => {
              openInNewTab(
                "https://github.com/CapriciousRebel/CovidVaccineTracker"
              );
            }}
          >
            Source Code <OpenInNewIcon fontSize="small" />
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNavbar;

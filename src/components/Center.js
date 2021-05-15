import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import LaunchIcon from "@material-ui/icons/Launch";
import { openInNewTab } from "../utils/utils";

export const Center = (props) => {
  return (
    <Row className="border-bottom">
      <Col>{props.name}</Col>
      <Col>Capacity = {props.available_capacity}</Col>{" "}
      <Col onClick={() => openInNewTab("https://www.cowin.gov.in/home")}>
        Book Now
        <LaunchIcon fontSize="small" />
      </Col>
    </Row>
  );
};

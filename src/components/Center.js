import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import LaunchIcon from "@material-ui/icons/Launch";
import { openInNewTab } from "../utils/utils";

export const Center = (props) => {
  return (
    <Row
      className="border-bottom"
      onClick={() => openInNewTab("https://www.cowin.gov.in/home")}
    >
      <Col xs={6}>{props.name}</Col>
      <Col>{props.available_capacity}</Col>
      <Col>{props.date}</Col>
    </Row>
  );
};

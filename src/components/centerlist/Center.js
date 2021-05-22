import { Col, Row } from "react-bootstrap";
import { openInNewTab } from "../../utils/utils";

export const Center = (props) => {
  return (
    <Row
      className="border-bottom"
      onClick={() => openInNewTab("https://www.cowin.gov.in/home")}
    >
      <Col xs={6} className="border-right">
        {props.name}
      </Col>
      <Col>{props.available_capacity}</Col>
      <Col>{props.date}</Col>
    </Row>
  );
};

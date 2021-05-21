import { Col, Row } from "react-bootstrap";
import { openInNewTab } from "../utils/utils";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

export const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <Row>
          <Col className="d-flex justify-content-center">
            Made with ❤️ by <pre> </pre>
            <span
              onClick={() => {
                openInNewTab("https://github.com/CapriciousRebel");
              }}
              className="mr-5"
            >
              CapriciousRebel
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

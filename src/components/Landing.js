import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import useSound from "use-sound";
import { openInNewTab } from "../utils/utils";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Menu } from "./Menu";
import { Input } from "./Input";
import { Centers } from "./Centers";
import { Footer } from "./Footer";

import notificationSound from "../sounds/notification.mp3";

const Landing = () => {
  const [play] = useSound(notificationSound);
  const [availableSessions, setAvailableSessions] = useState([]);
  const [submitOnce, setSubmitOnce] = useState(false);
  const [filterType, setFilterType] = useState({
    Covishield: true,
    Covaxin: true,
    Free: true,
    Paid: true,
    "18+": true,
    "45+": true,
  });

  useEffect(() => {
    console.log("availableSessions: ", availableSessions);
  }, [availableSessions]);

  return (
    <Container fluid>
      <Menu filterType={filterType} setFilterType={setFilterType} />
      <Input
        availableSessions={availableSessions}
        setAvailableSessions={setAvailableSessions}
        filterType={filterType}
        submitOnce={submitOnce}
        setSubmitOnce={setSubmitOnce}
      />
      {submitOnce ? (
        <Centers
          filterType={filterType}
          availableSessions={availableSessions}
          setAvailableSessions={setAvailableSessions}
        />
      ) : null}
      <Footer>
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
      </Footer>
    </Container>
  );
};

export default Landing;
